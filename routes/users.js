var express = require('express');
var router  = express.Router();
const sequelize = require('../sequelize');
const jwt = require('jsonwebtoken');

router.get('/', async function(req, res) {
    const id = req.user.id;
    const { keyword } = req.query;
    
    const result = await sequelize.query(`SELECT * FROM users WHERE name ILIKE '%${keyword}%' AND (id != '${id}')`, 
    { type: sequelize.QueryTypes.SELECT });
    
    if (result.length > 0) {
        res.send({
          users:  result
        })
    } else {
        res.status(404).send('Users are not found!')
    }
});

router.post('/', function(req, res) {
    console.log(req.body)
});

module.exports = router;
