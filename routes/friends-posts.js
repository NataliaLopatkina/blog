const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/friends-posts');
});

router.post('/', function (req, res) {
    res.redirect('/')
})

module.exports = router;
