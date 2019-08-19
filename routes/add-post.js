const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

router.get('/', function (req, res) {
    const token = req.cookies.token;
    const decodedToken = jwt.decode(token);
    const name = decodedToken.name;

    res.render('../views/add-post', { user: name });
});

router.post('/', function (req, res) {
    const { title, text } = req.body;
    const token = req.cookies.token;
    const decodedToken = jwt.decode(token);
    const id = decodedToken.id;

    if (title === '' || text === '' ) {
        res.status(422).send('Title, text are required!');

    } else {
        sequelize.query(`INSERT INTO posts (title, text, date, author_id) VALUES('${title}',
        '${text}', '${new Date().toISOString()}', ${id})`, { type: sequelize.QueryTypes.SELECT })
        
        res.status(201).send('Post added');
    }
});

module.exports = router;

