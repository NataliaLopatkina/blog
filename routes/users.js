var express = require('express');
var router  = express.Router();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', async function(req, res) {
    const result = await sequelize.query(`SELECT*FROM users WHERE name ILIKE '%${req.query.keyword}%'`);
    
    if (result) {
        res.send({
          users:  result[0]
        })
    } else {
        res.send({
            users: result
        })
    }

    console.log(res)
    
});

router.post('/', function(req, res) {
    console.log(req.body)
});

module.exports = router;