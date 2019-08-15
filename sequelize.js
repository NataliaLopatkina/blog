const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const PostModel = require('./models/post');
const FollowerModel = require('./models/follower');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);
const Follower = FollowerModel(sequelize, Sequelize);

//User.hasMany(Post);

sequelize.sync()
  .then(() => {
    console.log('Databases and tables created!')
})

module.exports = {
    User,
    Post,
    Follower,
    sequelize
}
