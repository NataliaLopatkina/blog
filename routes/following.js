const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', function (req, res) {
    console.log(res)
});

router.post('/', async function (req, res) {

    const token = req.cookies.token;
    const decodedToken = jwt.decode(token);
    const myID = decodedToken.id;

    const { following } = req.body;

    const followingUser = await sequelize.query(`SELECT*FROM followers WHERE (follower = '${myID}' 
    AND following = '${following}')`)

    if (followingUser[0][0]) {
        await sequelize.query(`DELETE FROM followers WHERE (follower = '${myID}' 
        AND following = '${following}')`)

        res.status(204).send('You are removed from the subscribers of this user');
    }

    else {
        await sequelize.query(`INSERT INTO followers (follower, following) VALUES('${myID}', '${following}')`,
        { type: sequelize.QueryTypes.INSERT })

        .then((result) => {
            res.status(201).send('You are added to the followers list of this user.');
        })
        .catch((err) => {
            console.log(err)
        })
    }
});

module.exports = router;
