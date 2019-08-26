const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

router.post('/', async function (req, res) {
    const myID = req.user.id;
    const { following } = req.body;

    const [[followingUser]] = await sequelize.query(`SELECT*FROM followers WHERE (follower = '${myID}' 
    AND following = '${following}')`)

    if (followingUser) {
        await sequelize.query(`DELETE FROM followers WHERE (follower = '${myID}' 
        AND following = '${following}')`, { type: sequelize.QueryTypes.DELETE })

        res.status(204).send('You are removed from the subscribers of this user');
    }

    else {
        await sequelize.query(`INSERT INTO followers (follower, following) VALUES('${myID}', '${following}')`)

        res.status(201).send('You are added to the followers list of this user.');
    }
});

module.exports = router;
