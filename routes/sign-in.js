const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const sequelize = require('../sequelize');

router.get('/', function (req, res) {
    res.render('../views/sign-in');
});

router.post('/', async function (req, res) {
    const { email, password } = req.body;

    const result = await sequelize.query(`SELECT * FROM users WHERE 
    (email = '${email}') AND (password = '${password}')`)

    const user = result[0][0]

    if (!user) {
        res.status(402).send('User is not registered');
    } else {
        
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email, password: user.password }, 
            'secret', { expiresIn: '1h' });

        res.cookie('token', token, { maxAge: 900000*60, httpOnly: false });
        res.status(200).send('User found!');
    }
});

module.exports = router;
