var express = require('express');
var router  = express.Router();
const Sequelize = require('sequelize');
const { User } = require('../sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', async function(req, res) {
    const sortType = 'ASC';
    const result = await sequelize.query(`SELECT * FROM users WHERE name ILIKE '%${req.query.keyword}%' ORDER BY name ${sortType}`, {type: sequelize.QueryTypes.SELECT})
    
    if (result) {
        res.send({
          users:  result
        })
    } else {
        res.send({
            users: result
        })
    }

    console.log(result)

    // const sortType = 'ASC';

    // sequelize.query(`SELECT * FROM users WHERE name ILIKE '%${req.query.keyword}%' ORDER BY name '${sortType}'`, {type: sequelize.QueryTypes.SELECT})
    //     .then(users => {
    //         res.json(users);
    //         console.log(users);
    //     });

});

router.post('/', function(req, res) {
    console.log(req.body)
});

module.exports = router;