var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    console.log('получение пользователей')
});

router.post('/', function(req, res) {
 console.log(req.body)
});


module.exports = router;