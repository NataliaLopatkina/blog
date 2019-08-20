const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/friends-posts', { user: req.user.name });
});

router.post('/', function (req, res) {})

module.exports = router;
