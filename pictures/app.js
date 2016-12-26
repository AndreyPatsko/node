const express = require('express');
let app = express();
let router = require('./router/router');

app.use(express.static(__dirname +'/public'));
app.use(router);

app.listen(8080,function(){
    console.log('Server listening at 8080')
}) 