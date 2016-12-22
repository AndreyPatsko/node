var express = require("express"),
 morgan = require("morgan"),
 bodyParser = require("body-parser"),
 mongodb = require("mongodb"),  
 app = express(),
 routers = require("./routes/router.js");

app.use(express.static(__dirname+"/public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/api",routers);

app.listen(8080);

module.exports = app;