const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', function (req, res) {
    res.render('../views/sign-in');
});

const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.post('/', async function (req, res) {
    const { id, name, email, password } = req.body;
    const user = await sequelize.query(`SELECT * FROM users WHERE 
    (email = '${email}') AND (password = '${password}')`);

    if (!user) {
        res.sendStatus(402);
    } else {
        const token = jwt.sign({ data: email }, 'secret', { expiresIn: '1h' });

        res.cookie('token', token, { maxAge: 900000, httpOnly: true });
        res.sendStatus(200);
    }
});

module.exports = router;
