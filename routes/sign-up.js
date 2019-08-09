const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

router.get('/', function (req, res) {
    res.render('../views/sign-up');
});

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});


router.post('/', function (req, res) {
    return sequelize.query(`INSERT INTO users (name, email, password, "createdAt","updateddAt") VALUES('${req.body.name}',
     '${req.body.email}', '${req.body.password}', '${new Date().toISOString()}' )`)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })

    //User.create(req.body);
    //return res.redirect(307, '/sign-in');
});

module.exports = router;