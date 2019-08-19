const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

router.get('/', function (req, res) {
    res.render('../views/sign-up');
});

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.post('/', async function (req, res, next) {
    const { name, email, password } = req.body;
    const result = await sequelize.query(`SELECT FROM users WHERE (email = '${email}')`, { type: sequelize.QueryTypes.SELECT })

    if (!result[0]) {
        sequelize.query(`INSERT INTO users (name, email, password) VALUES('${name}', 
            '${email}', '${password}' )`, { type: sequelize.QueryTypes.INSERT })
        .then((result) => {
            res.status(201).send('User is registered');
        })
        .catch((err) => {
            console.log(err)
        })

    } else {
        res.status(403).send('User with this name is already registered');
    }
});

module.exports = router;
