const express = require('express');
const app = express();
const port = 3030;
const clientDir = __dirname + '\\client\\';

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
app.listen(port, () => console.log(`Listening to port 3030!`)
);