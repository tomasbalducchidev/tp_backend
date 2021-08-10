const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");
// const constants = require("../common/constants");

const ReceivedModel = sequelizeConnection.define(
  "received",
  {
    idreceived: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    de: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "de",
    },
    para: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "para",
    },
    message: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "message",
    },
    isVisible: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: "isVisible",
      defaultValue: 1,
    },
  },
  {
    tableName: "received",
    timestamps: false,
  }
);
module.exports = ReceivedModel;
