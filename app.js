const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const verifyToken = require('./middelwares/verify-token');
const { signUpRouter, signInRouter, homeRouter, userRouter, addPostRouter, 
    myPostsRouter, followingRouter, postsRouter, friendsPostsRouter } = require('./routes');

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
app.use('/add-post', verifyToken, addPostRouter);
app.use('/following', verifyToken, followingRouter);
app.use('/posts', verifyToken, postsRouter);

module.exports = app;
