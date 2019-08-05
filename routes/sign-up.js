const { User } = require('../sequelize');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/sign-up');
});

const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.post('/', function (req, res) {
   //sequelize.query(`INSERT INTO users (name, email, password) VALUES('${req.bodyname}', '${req.body.emai}', '${req.body.password}' )` )

    User.create(req.body);
    return res.redirect(307, '/sign-in');
});

module.exports = router;