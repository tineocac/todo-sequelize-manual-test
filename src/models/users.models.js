const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;

// crear el modelo para tasks --> ponerlo dentro de initModels para que
// se cree la tabla en la base de datos
