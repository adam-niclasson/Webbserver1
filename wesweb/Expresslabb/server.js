const express = require('express');
const app = express();
const port = (3030);
const clientDir = (__dirname + '\\client\\');

const sendFile = (response, status, type, filePath) => {
    response.writeHead(status, {"Content-Type": type });
    createReadStream(filePath).pipe(response);
};

createServer((request, response) => {
  if (request.method === "POST") {
      let body = "";
      request.on("data", data => {
        body += data;
      });
      request.on("end", () => {
        const { Username, Password } = decode(body);
        firstFunction(Username, Password);
        console.log(`email: ${Username}, name: ${Password}`);
      });        
      return sendFile(response, 200, "text/html", "./client/indexogin.html");
    };





app.get('/', (req, res) => {
  res.sendFile(clientDir+'index.html'+'index.css')
});

app.get('/indexlogin.html', (req, res) => {
  res.sendFile(clientDir+'/indexlogin.html'+'indexlogin.css')
});

app.listen(port, () => console.log(`Listening to port 3030!`));
});