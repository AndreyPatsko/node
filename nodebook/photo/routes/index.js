var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).json({ok: 'ok'})
});

// router.get('/uploadImg', function(req, res){
//   let x;
// })

module.exports = router;