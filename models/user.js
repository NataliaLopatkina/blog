module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        name: {
          type: type.STRING,
          allowNull: false,
        },

        email: {
          type: type.STRING,
          allowNull: false,
        },

        password: {
          type: type.STRING,
          allowNull: false,
        },
    })
}
