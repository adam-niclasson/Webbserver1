const express = require('express');
const app = express();
const port = 3030;
const clientDir = __dirname + '\\client\\';
const bodyparser = require('body-parser');
const Module = require('./myModule');

app.use(bodyparser.urlencoded())
app.use(express.json())

app.post('/', (req, res) => {
  let name = req.body.Username
  let password = req.body.Password
  Module.firstFunction(name, password)
  res.sendFile(clientDir + 'indexlogin.html')
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
app.get('/indexlogin.html', (req, res) => {
  res.sendFile(clientDir + 'indexlogin.html')
})
app.get('/indexlogin.css', (req, res) => {
  res.sendFile(clientDir + 'indexlogin.css')
})
app.get('/register.html', (req, res) => {
  res.sendFile(clientDir + 'register.html')
})
app.get('/register.css', (req, res) => {
  res.sendFile(clientDir + 'register.css')
})
app.listen(port, () => console.log(`Listening to port 3030!`)
);
