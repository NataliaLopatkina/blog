const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

router.get('/', function (req, res) {
    res.render('../views/home', {user: req.user.name});
});

router.post('/', function(req, res) {})

module.exports = router;
