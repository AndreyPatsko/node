var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200);
    response.end("Hello, world!");
}).listen(8124);
console.log("Server running on 8124");