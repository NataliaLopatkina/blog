const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/home', {user: req.user.name});
});

module.exports = router;
