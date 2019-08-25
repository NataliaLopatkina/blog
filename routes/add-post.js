const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

router.get('/', function (req, res) {
    res.render('../views/add-post', { user: req.user.name });
});

router.post('/', function (req, res) {
    const { title, text } = req.body;
    const id = req.user.id;

    if (title === '' || text === '' ) {
        res.status(422).send('Title, text are required!');

    } else {
        sequelize.query(`INSERT INTO posts (title, text, date, author_id) VALUES('${title}',
        '${text}', '${new Date().toISOString()}', ${id})`, { type: sequelize.QueryTypes.SELECT })
        
        res.status(201).send('Post added');
    }
});

module.exports = router;

