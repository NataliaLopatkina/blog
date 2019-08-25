var express = require('express');
var router  = express.Router();
const sequelize = require('../sequelize');

router.get('/', async function(req, res) {
    const id = req.user.id;
    const { keyword } = req.query;
    
    const result = await sequelize.query(`SELECT users.id, users.name, users.email, followers.follower 
    FROM users LEFT JOIN followers on users.id = followers.following WHERE users.id !='${id}' 
    AND name ILIKE '%${keyword}%'`, { type: sequelize.QueryTypes.SELECT });
    
    if (result.length > 0) {
        res.send({
          users:  result
        })
    } else {
        res.status(404).send('Users are not found!')
    }
});

module.exports = router;
