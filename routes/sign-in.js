const { User } = require('../sequelize');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

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
        console.log("ok");

        const token = jwt.sign({
            data: req.body.login
        }, 'secret', { expiresIn: '1h' });

        res.cookie('token', token,  { maxAge: 900000, httpOnly: true });
        res.redirect('home');
    }
});

module.exports = router;
