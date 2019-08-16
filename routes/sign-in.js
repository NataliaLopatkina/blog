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
    const { email, password } = req.body;
    const result = await sequelize.query(`SELECT * FROM users WHERE 
    (email = '${email}') AND (password = '${password}')`)

    const user = result[0][0];

    if (!user) {
        res.send({message: 'User is not registered', status: 402})
    } else {
        
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email, password: user.password }, 
            'secret', { expiresIn: '1h' });

        res.cookie('token', token, { maxAge: 900000, httpOnly: false });
        res.send({ message: 'User found!', status: 200 })
    }
});

module.exports = router;
