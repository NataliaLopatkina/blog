const signUpRouter = require('./sign-up');
const signInRouter = require('./sign-in');
const homeRouter = require('./home');
const userRouter = require('./users');
const addPostRouter = require('./add-post');
const myPostsRouter = require('./my-posts');
// const friendsPostsRouter = require('./friends-posts');
// const postRouter = require('./post');

module.exports = {
    signUpRouter,
    signInRouter,
    homeRouter,
    userRouter,
    addPostRouter,
    myPostsRouter,
    // friendsPostsRouter,
    // postRouter
}
