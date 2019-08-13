var express = require('express');
var router  = express.Router();
const Sequelize = require('sequelize');
const { User } = require('../sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', async function(req, res) {
    const { keyword } = req.query;
    const result = await sequelize.query(`SELECT * FROM users WHERE name ILIKE '%${keyword}%'`, { type: sequelize.QueryTypes.SELECT });
    
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
