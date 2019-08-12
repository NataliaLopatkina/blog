const { User } = require('../sequelize');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', function (req, res) {
    res.render('../views/sign-in');
});

router.post('/', async function (req, res) {
    const user = await User.findOne({where: {email: req.body.email, password: req.body.password}});
    //const user = await sequelize.query(`SELECT FROM users WHERE email = '${req.body.email}' password = '${req.body.password}'`)

    if (!user) {
        console.log("Incorrected login or password!");
        res.sendStatus(402);
    }

    else {
        console.log("Ok");
        
        const token = jwt.sign({
            data: req.body.email
        }, 'secret', { expiresIn: '1h' });

        res.cookie('token', token, { maxAge: 900000, httpOnly: true });
        res.sendStatus(200);
    }
});

module.exports = router;
