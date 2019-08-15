const { User } = require('../sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('follower', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        follower: {
            type: type.INTEGER,
            // references: {
            //     model: "User",
            //     key: 'id'
            // },
            allowNull: false,
        },

        following: {
            type: type.INTEGER,
            // references: {
            //     model: "User",
            //     key: 'id'
            // },
            allowNull: false,
        },
    })
}
