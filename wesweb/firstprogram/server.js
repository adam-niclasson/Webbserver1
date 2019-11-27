const { createServer } = require("http");
const { createReadStream } = require("fs");
const { decode } = require("querystring")
const { firstFunction } = require("./myModule")

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
          const { FirstName, LastName } = decode(body);
          firstFunction(FirstName, LastName);
          console.log(`email: ${FirstName}, name: ${LastName}`);
        });        
        return sendFile(response, 200, "text/html", "./client/flexboxserverlogin.html");
      }


switch (request.url) {
    case "/":
        return sendFile(response, 200, "text/html", "./client/flexboxserver.html");
    case "/flexboxserverlogin":
        return sendFile(response, 200, "text/html", "./client/flexboxserverlogin.html");
    case "/Gopnik.jpg":
        return sendFile(response, 200, "image/jpg","./client/Gopnik.jpg");
    case "/flexboxserver.css":
        return sendFile(response, 200, "text/css", "./client/flexboxserver.css");
    case "/Flexboxserverlogin.css":
        return sendFile(response, 200, "text/css", "./client/Flexboxserverlogin.css");
    case "/flexboxserver2.html":
        return sendFile(response, 200, "text/html", "./client/flexboxserver2.html");

}
}).listen(3030);

console.log("Adams' personal website running on port 3030");