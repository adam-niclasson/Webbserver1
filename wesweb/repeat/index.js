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
    Module.registerUser(name, password);
    res.sendFile(clientDir + "indexlogin.html");
});

app.get('/', (req, res) => 
    res.sendFile(clientDir + 'index.html')
)
app.get('/style.css', (req, res) => {
    res.sendFile(clientDir + 'style.css')
})
app.get('/log in', (req, res) => {
    res.send(clientDir + 'indexlogin.html')
})
app.get('/Jaktknivar', (req,res) => {
    res.sendFile(clientDir + 'sida1.html')
})
app.get('/sida1.css', (req, res) => {
    res.sendFile(clientDir + 'sida1.css')
})
app.get('/Fiskeknivar', (req,res) => {
    res.sendFile(clientDir + 'sida2.html')
})
app.get('/sida2.css', (req, res) => {
    res.sendFile(clientDir + 'sida2.css')
})
app.get('/Kastknivar', (req,res) => {
    res.sendFile(clientDir + 'sida3.html')
})
app.get('/sida3.css', (req, res) => {
    res.sendFile(clientDir + 'sida3.css')
})
app.get('/AndraKnivar', (req,res) => {
    res.sendFile(clientDir + 'sida4.html')
})
app.get('/sida4.css', (req, res) => {
    res.sendFile(clientDir + 'sida4.css')
})
app.get('/butiksbild.jpg', (req, res) => {
    res.sendFile(clientDir + 'butiksbild.jpg')
})
app.get('/butterflyknife.jpg', (req, res) => {
    res.sendFile(clientDir + 'butterflyknife.jpg')
})
app.get('/fiskekniv.jpg', (req, res) => {
    res.sendFile(clientDir + 'fiskekniv.jpg')
})
app.get('/fiskekniv2.jpg', (req, res) => {
    res.sendFile(clientDir + 'fiskekniv2.jpg')
})
app.get('/jaktkniv.jpg', (req, res) => {
    res.sendFile(clientDir + 'jaktkniv.jpg')
})
app.get('/jaktkniv2.jpg', (req, res) => {
    res.sendFile(clientDir + 'jaktkniv2.jpg')
})
app.get('/karambit.jpg', (req, res) => {
    res.sendFile(clientDir + 'karambit.jpg')
})
app.get('/karta.png', (req, res) => {
    res.sendFile(clientDir + 'karta.png')
})
app.get('/kastkniv.jpg', (req, res) => {
    res.sendFile(clientDir + 'kastkniv.jpg')
})
app.get('/kastkniv2.jpg', (req, res) => {
    res.sendFile(clientDir + 'kastkniv2.jpg')
})
app.get('/knivar.jpg', (req, res) => {
    res.sendFile(clientDir + 'knivar.jpg')
})
app.get('/knivarse.png', (req, res) => {
    res.sendFile(clientDir + 'knivarse.png')
})
app.get('/springknife.jpg', (req, res) => {
    res.sendFile(clientDir + 'springknife.jpg')
})
app.get('/Sharpening.mp4', (req, res) => {
    res.sendFile(clientDir + 'Sharpening.mp4')
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