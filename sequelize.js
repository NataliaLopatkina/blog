const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
});

sequelize.sync()
  .then(() => {
    console.log('Databases and tables created!')
})

module.exports = sequelize;
