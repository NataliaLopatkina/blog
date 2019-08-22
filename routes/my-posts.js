const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('../views/my-posts', {user: req.user.name});
});

router.post('/', async function (req, res) {
    console.log(req)
});

module.exports = router;
