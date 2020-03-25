const express = require('express')
const app = express()
const port = 3030
const clientDir = __dirname + '\\client\\'
const Module = require("./myModule")
const bcrypt = require('bcryptjs')

app.use(express.json())
app.use(express.urlencoded())

const users = []

app.post("/", (req, res) => {
    let name = req.body.Username;
    let password = req.body.Password;
    Module.firstFunction(name, password);
    res.sendFile(clientDir + "indexlogin.html");
});

app.get('/', (req, res) => 
    res.sendFile(clientDir + 'index.html')
)
app.get('/style', (req, res) => {
    res.sendFile(clientDir + 'style.css')
})
app.get('/indexlogin,html', (req, res) => {
    res.send(clientDir + 'indexlogin.html')
})
app.get('/Strongchanka', (req, res) => {
    res.sendFile(clientDir + 'Strongchanka.png')
})
app.get('/users', (req, res) => {
    res.json(users)
})
app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})
app.post('/users/login', async (req, res) => {
    const user = user.find(user => user.name === req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(port, () => console.log(`listening on port ${port}!`))