const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', function (req, res) {
    res.render('../views/post');
});

router.post('/', function (req, res, next) {
    const { title, text } = req.body;

    if (title === '' || text === '' ) {
        res.status(422).send('Title, text are required!');
    } else {
        sequelize.query(`INSERT INTO posts (title, text, "createdAt","updatedAt") VALUES('${title}',
        '${text}', '${new Date().toISOString()}', '${new Date().toISOString()}' )`)
    }
});

module.exports = router;

