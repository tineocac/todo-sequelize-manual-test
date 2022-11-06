const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Adress = db.define(
  "adresses",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: "users",
      },
      field: "user_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Adress;
