const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

let router = require('./routers');

let app = express();

app.use(express.static(path.join(__dirname , '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/',router);




app.listen(3000,function(){
    console.log('Server started at 3000 port');
});