const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/my-posts');
});

router.post('/', async function (req, res) {
});

module.exports = router;
