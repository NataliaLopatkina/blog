const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

router.get('/', async function (req, res) {
    const { id } = req.query;

    if (req.query.type === 'myPost') {
        const result = await sequelize.query(`SELECT * FROM posts WHERE author_id = ${id}`)

        if (result.length > 0) {
            res.send({
                posts: result
            })
        }

        else {
            res.status(404).send('Posts not found!');
        }

    } else {
        const result = await sequelize.query(`SELECT * FROM posts right join users on posts.author_id = users.id 
        where users.id in (SELECT following from followers where follower = '${id}') 
        and posts.author_id is not null`)

        if (result.length > 0) {
            res.send({
                friendsPosts: result
            })
        }

        else {
            res.status(404).send('Posts not found!');
        }
    }
});

router.post('/', async function (req, res) {});

module.exports = router;
