let express = require('express');
let morgan = require('morgan');
let path = require('path');
let fs = require('fs');

let app = express();

app.use(morgan('short'));

let staticPath = path.join(__dirname,'static');
app.use(express.static(staticPath));

app.use(function(req,res){
    res.status = 404;
    res.send('file not found');
});

app.listen(8080,function(){
    console.log('Server starting at 8080 port')
});