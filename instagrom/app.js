const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const passport = require('passport');
const session = require("express-session");
const flash = require("connect-flash");

let router = require('./routers');
const setUpPassport = require('./setuppassport');

let app = express();

mongoose.connect('mongodb://localhost:27017/test');
setUpPassport();

app.use(express.static(path.join(__dirname , '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(session({
    secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
    resave: true,
    saveUninitialized: true
}));


app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use('/',router);





app.listen(3000,function(){
    console.log('Server started at 3000 port');
});