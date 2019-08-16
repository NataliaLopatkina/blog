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
        console.log('Создание нового пользователя')
        
        sequelize.query(`INSERT INTO users (name, email, password) VALUES('${name}', 
            '${email}', '${password}' )`, { type: sequelize.QueryTypes.INSERT })
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log(err)
        })

    } else {
        console.log('Такой пользователь уже есть')
        res.sendStatus(403)
    }
});

module.exports = router;
