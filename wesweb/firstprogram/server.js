const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = (response, status, type, filePath) => {
    response.writeHead(status, {"Content-Type": type });
    createReadStream(filePath).pipe(response);
};

createServer((request, response) => {
switch (request.url) {
    case "/":
        return sendFile(response, 200, "text/html", "./client/Lektion 3.html");
    case "/Gopnik.jpg":
        return sendFile(response, 200, "image/jpeg","./client/Gopnik.jpg");

}
}).listen(3030);

console.log("Adams' personal website running on port 3030");