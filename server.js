var http = require('http')
http.createServer(function(req,res){
    res.writeHeader(200);
    res.end('Hello');
}).listen(8080);