const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send('./public/index.html');
});

router.get('/login', function(req,res){
    res.send('./public/index.html');
});

module.exports = router;