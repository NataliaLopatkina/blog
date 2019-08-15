var express = require('express');
var router  = express.Router();
const Sequelize = require('sequelize');
const { User } = require('../sequelize');
const jwt = require('jsonwebtoken');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', async function(req, res) {
    const {token} = req.cookies;
    const decodedToken = jwt.decode(token);
    const {id} = decodedToken;

    const { keyword } = req.query;
    const result = await sequelize.query(`SELECT * FROM users WHERE name ILIKE '%${keyword}%' AND (id != '${id}')`, 
    { type: sequelize.QueryTypes.SELECT });
    
    if (result) {
        res.send({
          users:  result
        })
    }
});

router.post('/', function(req, res) {
    console.log(req.body)
});

module.exports = router;
