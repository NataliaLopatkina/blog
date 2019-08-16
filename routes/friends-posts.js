const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', function (req, res) {
    const token = req.cookies.token;
    const decodedToken = jwt.decode(token);
    const name = decodedToken.name;
    res.render('../views/friends-posts', { user: name });
});

router.post('/', function (req, res) {})

module.exports = router;
