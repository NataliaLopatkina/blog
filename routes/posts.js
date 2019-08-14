const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', function (req, res) {
    const result = await sequelize.query(`SELECT * FROM users WHERE 
    (id = 55) AND (password = '${password}')`)

    console.log(result)
});

router.post('/', async function (req, res) {
    
});

module.exports = router;