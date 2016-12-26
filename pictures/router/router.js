let express = require('express');
let router = express.Router();
let fs = require('fs');

router.get('/',function(req,res){
    res.send('index.html');
});
router.post('/picture',function(picture){
    // fs.write()
});

module.exports = router;