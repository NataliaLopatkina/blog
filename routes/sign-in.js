const { User } = require('../sequelize');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/sign-in');
});

router.post('/', async function (req, res) {

    const user = await User.findOne({where: {name: req.body.login, password: req.body.password}});

    if (!user) {
        console.log("Incorrected login or password!");
        res.send('Incorrect login or password');
    }

    else {
        console.log("ok")
        res.redirect('sign-up');
    }
});

module.exports = router;