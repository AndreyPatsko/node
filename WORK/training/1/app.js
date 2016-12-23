const http = require('http');
const fs = require('fs');

var app = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    response.write('Привет от Андлрея');
    fs.readFile('index.html',function(err,data){
    response.write(data);
    response.end();
    });
    
}).listen(3000);
console.log('listening on 3000...');