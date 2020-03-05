const express = require('express')
const app = express()
const port = 3030
const clientDir = __dirname + '\\client\\'
const Module = require("./myModule")

app.use(express.json())
app.use(express.urlencoded())

app.post("/", (req, res) => {
    let name = req.body.Username;
    let password = req.body.Password;
    Module.firstFunction(name, password);
    res.sendFile(clientDir + "indexlogin.html");
});

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/style', (req, res) => {
    res.sendFile(clientDir + 'style.css')
})
app.get('/indexlogin,html', (req, res) => {
    res.send(clientDir + 'indexlogin.html')
})
app.get('/Strongchanka', (req, res) => {
    res.sendFile(clientDir + 'Strongchanka.png')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))