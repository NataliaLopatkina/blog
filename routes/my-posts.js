const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', function (req, res) {
    res.render('../views/my-posts', {user: req.user.name});
});

router.post('/', async function (req, res) {});

module.exports = router;
