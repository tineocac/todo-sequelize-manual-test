const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const TaskCategories = db.define(
  "task_categories",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TaskCategories;
