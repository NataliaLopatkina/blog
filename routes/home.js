const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/home', {user: 'Natalia'});
});

router.post('/', function(req, res) {
    res.redirect('/')
})

module.exports = router;
