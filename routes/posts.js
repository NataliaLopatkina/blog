const { Post } = require('../sequelize');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/add-post');
});

router.post('/', async function (req, res) {
    await Post.create(req.body);
    const posts = await Post.findAll();

    console.log(posts);
});

module.exports = router;