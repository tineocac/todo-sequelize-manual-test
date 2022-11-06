const Addresses = require("./adresses.model");
const Users = require("./users.models");
const Tasks = require("./tasks.model");
const Categories = require("./categories.model");
const TaskCategories = require("./taskcategories.models");

const initModels = () => {
  TaskCategories;
  // 1 - 1 uno a uno one to one
  // Una direccion pertenece a un usuario
  Addresses.belongsTo(Users, { as: "resident", foreignKey: "user_id" });
  // Users tiene una direccion
  Users.hasOne(Addresses, { as: "home", foreignKey: "user_id" });

  // 1 - n || n - 1, one to many || many to one
  // Un usuario tiene muchas tares
  Users.hasMany(Tasks, { as: "todo", foreignKey: "user_id" });
  // Una tarea pertence a un usuario
  Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" });

  // n - n || many to many
  //Si no existe la table, pues crea una nueva tabla llamada tasks_categories
  Tasks.belongsToMany(Categories, {
    through: "task_categories",
    foreignKey: "category_id",
  });

  Categories.belongsToMany(Tasks, {
    through: "task_categories",
    foreignKey: "task_id",
  });
};

module.exports = initModels;
