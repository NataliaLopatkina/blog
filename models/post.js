// const {User} = require('../sequelize');

// module.exports = (sequelize, type) => {
//     return sequelize.define('post', {
//         id: {
//           type: type.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false,
//         },

//         text: {
//           type: type.STRING,
//           allowNull: false,
//         },

//         authorId: {
//           type: type.INTEGER,
//           references: {
//             model: "User",
//             key: 'id'
//           },
//           allowNull: false,
//         },

//         title: {
//           type: type.STRING,
//           allowNull: false,
//         },
//     })
// }