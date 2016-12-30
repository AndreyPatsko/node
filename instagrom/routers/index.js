const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

let router = express.Router();


router.get('/cat',function(request,response){
    console.log(path.parse(request.path));
    response.sendFile('cat.jpg',{root: './public'});
});

router.post('/registration',function(request,response){
    response.send('reg');
    // response.sendFile('registration.html',{root:'./public'})
});

module.exports = router;