const jwt = require('jsonwebtoken');

const varifyToken = function(req, res, next) {
    const token = req.cookies.token

    jwt.verify(token, 'secret', function(err, decoded) {
        if (decoded) {
            req.user = decoded;
            return next();
        } else {
            return res.redirect('/')
        }
    });
}

module.exports = varifyToken;
