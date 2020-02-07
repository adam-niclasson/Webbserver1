const express = require('express');
const app = express();
const port = 3030;
const clientDir = __dirname + '\\client\\';
const bodyparser = require('body-parser');
const Module = require('./myModule');
const bcrypt = require('bcryptjs')

app.use(bodyparser.urlencoded())
app.use(express.json())

const users = [];

app.post('/', (req, res) => {
  let name = req.body.Username
  let password = req.body.Password
  Module.firstFunction(name, password)
  res.sendFile(clientDir + 'indexlogin.html')
})

app.get('/users', (req, res) => {
  res.json(users)
})
app.post('/users', async (req, res) => {
    try{
      const hashedPassowrd = await bcrypt.hash(req.body.password, 10)
      const user = { name: req.body.name, password: req.body.password }
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
    
  }
})
app.post('/users/register', async (req, res) => {
  
})
app.get('/', (req, res) => {
  res.sendFile(clientDir + 'index.html')
})
app.get('/index.css', (req, res) => {
  res.sendFile(clientDir + 'index.css')
})
app.get('/Waterfall.gif', (req, res) => {
  res.sendFile(clientDir + 'Waterfall.gif')
})
app.get('/Gopnik.jpg', (req, res) => {
  res.sendfile(clientDir + 'Gopnik.jpg')
})
app.get('/indexlogin.html', (req, res) => {
  res.sendFile(clientDir + 'indexlogin.html')
})
app.get('/indexlogin.css', (req, res) => {
  res.sendFile(clientDir + 'indexlogin.css')
})
app.listen(port, () => console.log(`Listening to port 3030!`)
);
