let express = require('express');
let http = require('http');
let logger = require('morgan');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();

app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');

let entries = [];
app.locals.entries = entries;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(request, response) {
response.render("index");
});
app.get("/new-entry", function(request, response) {
response.render("new-entry");
});

app.post("/new-entry", function(request, response) {
if (!request.body.title || !request.body.body) {
response.status(400).send("Entries must have a title and a body.");
return;}
entries.push({
        title: request.body.title,
        content: request.body.body,
        published: new Date()
});
response.redirect("/");
});

app.use(function(request, response) {
response.status(404).render("404");
});

http.createServer(app).listen(3000, function() {
console.log("Guestbook app started on port 3000.");
});