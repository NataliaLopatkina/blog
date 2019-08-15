const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', async function (req, res) {
    //const { id } = req.query;
    const { idFriend } = req.query;

    // if (req.query.id) {
        
    //     const result = await sequelize.query(`SELECT * FROM posts WHERE author_id = ${id}`)

    //     if (result) {
    //         res.send({
    //             posts: result
    //         })
    //     }

    //     else {
    //         console.log('Посты не найдены')
    //     }
    // }

    // else if (req.query.idFriend) {
        const friendsPosts = await sequelize.query(`SELECT * FROM posts WHERE author_id != ${idFriend}`)

        if (friendsPosts) {
            res.send({
                postsFriend: friendsPosts
            })
        }

        else {
            console.log('Посты не найдены')
        }
});

router.post('/', async function (req, res) {
    
});

module.exports = router;
