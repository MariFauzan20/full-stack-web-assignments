var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (request.url) {
      case "/about":
        response.write("Welcome to about us page");
        break;
      case "/contact":
        response.write("Welcome to contact us page");
        break;
      default:
        response.write("Hello world");
    }
    response.end();
  })
  .listen(3000);

console.log("Server running on http://localhost:3000");
