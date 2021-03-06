const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");

const UserModel = sequelizeConnection.define(
  "user",
  {
    idusuarios: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "username",
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "password",
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "city",
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "country",
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = UserModel;
