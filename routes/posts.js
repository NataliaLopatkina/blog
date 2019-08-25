const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

router.get('/', async function (req, res) {
    const { id } = req.user;

    if (req.query.type === 'myPost') {
        const [posts] = await sequelize.query(`SELECT * FROM posts WHERE author_id = ${id}`)

        if (posts.length > 0) {
            res.send({
                posts
            })
        }

        else {
            res.status(404).send('Posts not found!');
        }

    } else {
        const [posts] = await sequelize.query(`SELECT * FROM posts right join users on posts.author_id = users.id 
        where users.id in (SELECT following from followers where follower = '${id}') 
        and posts.author_id is not null`)

        if (posts.length > 0) {
            res.send({
                friendsPosts: posts
            })
        }

        else {
            res.status(404).send('Posts not found!');
        }
    }
});

module.exports = router;
