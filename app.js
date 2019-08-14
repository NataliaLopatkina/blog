const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const verifyToken = require('./middelwares/verify-token');
const { signUpRouter, signInRouter, homeRouter, userRouter, myPostsRouter, friendsPostsRouter, postRouter } = require('./routes');

app.use(cors());
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.listen(3000);

app.use('/', signInRouter);
app.use('/sign-up', signUpRouter);
app.use('/home', verifyToken, homeRouter);
app.use('/users', verifyToken, userRouter);
app.use('/my-posts', verifyToken, myPostsRouter);
app.use('/friends-posts', verifyToken, friendsPostsRouter);
app.use('/post', verifyToken, postRouter)

module.exports = {
    app,
    cookieParser
};
