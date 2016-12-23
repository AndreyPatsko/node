const http = require('http');

var server = http.createServer().listen(8080);

server.on('request', function(req,res){
    
    console.log('request:',req.method, req.url);
    console.log('Status', res.statusCode);
});

server.on('request', function(req,res){
    if(req.url == '/stop'){
            req.connection.destroy();
            server.close();
        }else{

    res.writeHead(200);
    res.write('Hello from node.js');
    res.end();
        }
});
server.on('listening', function(req,res){
    console.log('listening port 8080');
});
server.on('connection',function(){
    console.log('Connect...');
});

server.on('close',function(){
    console.log('The end');
})
