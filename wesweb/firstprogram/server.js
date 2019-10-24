const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = (response, status, type, filePath) => {
    response.writeHead(status, {"Content-Type": type });
    createReadStream(filePath).pipe(response);
};

createServer((request, response) => {
switch (request.url) {
    case "/":
        return sendFile(response, 200, "text/html", "./client/flexboxserver.html");
    case "/Gopnik.jpg":
        return sendFile(response, 200, "image/jpg","./client/Gopnik.jpg");
    case "/flexboxserver.css":
        return sendFile(response, 200, "text/css", "./client/flexboxserver.css");

}
}).listen(3030);

console.log("Adams' personal website running on port 3030");