const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

router.get('/', function (req, res) {
    res.render('../views/sign-up');
});

router.post('/', async function (req, res) {
    const { name, email, password } = req.body;
    const [[result]] = await sequelize.query(`SELECT FROM users WHERE (email = '${email}')`)

    if (!result) {
        sequelize.query(`INSERT INTO users (name, email, password) VALUES('${name}', 
            '${email}', '${password}' )`, { type: sequelize.QueryTypes.INSERT })

        return res.status(201).send('User is registered');

    }
    res.status(403).send('User with this email is already registered');

});

module.exports = router;
