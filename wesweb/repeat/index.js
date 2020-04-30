const express = require('express')
const app = express()
const port = 3030
const clientDir = __dirname + '\\client\\'
const Module = require("./gooseModule")
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
app.get('/sida1.html', (req,res) => {
    res.sendFile(clientDir + 'sida1.html')
})
app.get('/sida1.css', (req, res) => {
    res.sendFile(clientDir + 'sida1.css')
})
app.get('/sida2.html', (req,res) => {
    res.sendFile(clientDir + 'sida2.html')
})
app.get('/sida2.css', (req, res) => {
    res.sendFile(clientDir + 'sida2.css')
})
app.get('/sida3.html', (req,res) => {
    res.sendFile(clientDir + 'sida3.html')
})
app.get('/sida3.css', (req, res) => {
    res.sendFile(clientDir + 'sida3.css')
})
app.get('/sida4.html', (req,res) => {
    res.sendFile(clientDir + 'sida4.html')
})
app.get('/sida4.css', (req, res) => {
    res.sendFile(clientDir + 'sida4.css')
})
app.get('/users', (req, res) => {
    res.json(users)
})
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
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
app.get('/users', async (req, res) => {
    try {
      let users = await UserModel.getUsersList()
      console.log(users)
      res.status(201).send(users)
    } catch {
      console.log("START MONGODB")
      res.status(500).send()
    }
  })

app.listen(port, () => console.log(`listening on port ${port}!`))