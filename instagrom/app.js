const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
let app = express();
let router = require('./router/index');



app.use(express.static(__dirname + '/public'));
// app.set('public', __dirname + '/public');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use('/',router);
app.use('/login',router);




app.listen(3000, function(){
    console.log('Server started at 3000 port');
});


module.exports = app;