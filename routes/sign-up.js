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
            res.send({ message: 'User is registered', status: 201})
        })
        .catch((err) => {
            console.log(err)
        })

    } else {
        res.send({ message: 'User with this name is already registered', status: 403 })
    }
});

module.exports = router;
