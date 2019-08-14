const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', function (req, res) {
    res.render('../views/add-post');
});

router.post('/', function (req, res, next) {
    const { title, text } = req.body;
    const token = req.cookies.token;
    const decodedToken = jwt.decode(token);
    const id = decodedToken.id;

    if (title === '' || text === '' ) {
        res.status(422).send('Title, text are required!');
    } else {
        sequelize.query(`INSERT INTO posts (title, text, author_id, "createdAt","updatedAt") VALUES('${title}',
        '${text}', '${id}', '${new Date().toISOString()}', '${new Date().toISOString()}')`, { type: sequelize.QueryTypes.SELECT })
    }

    
});

module.exports = router;

