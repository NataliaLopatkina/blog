const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

router.get('/', function (req, res) {
    res.render('../views/sign-up');
});

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.post('/', function (req, res, next) {

    const {password, name, email} = req.body;

    if (password === '' || name === '' ||  email === '') {
        res.status(422).send('Password, email, name are required!');
    } else {
        sequelize.query(`INSERT INTO users (name, email, password, "createdAt","updatedAt") VALUES('${name}',
        '${email}', '${password}', '${new Date().toISOString()}', '${new Date().toISOString()}' )`)

        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            return next(err);
        })
    }
});

module.exports = router;
