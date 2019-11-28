const express = require('express');
const app = express();
const port = (3030);
const clientDir = (__dirname + '\\client\\');

const sendFile = (response, status, type, filePath) => {
    response.writeHead(status, {"Content-Type": type });
    createReadStream(filePath).pipe(response);
};







app.get('/', (req, res) => {
  res.sendFile(clientDir+'index.html')
})

app.get('/', (req, res) => {
  res.sendFile(clientDir+'index.html')
})

app.listen(port, () => console.log(`Example app listening on port port!`))