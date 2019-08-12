const signUpRouter = require('./sign-up');
const signInRouter = require('./sign-in');
const homeRouter = require('./home');
const userRouter = require('./users');
const myPostsRouter = require('./my-posts');
const friendsPostsRouter = require('./friends-posts');
const postRouter = require('./post');

module.exports = {
    signUpRouter,
    signInRouter,
    homeRouter,
    userRouter,
    myPostsRouter,
    friendsPostsRouter,
    postRouter
}
