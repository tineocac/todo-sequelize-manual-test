const db = require("../utils/database");
const initModels = require("../models/initModels");
// Modelos donde queremos plantar informacion

const Tasks = require("../models/tasks.model");
const Users = require("../models/users.models");
const Categories = require("../models/categories.model");
const Address = require("../models/adresses.model");

initModels();

const users = [
  { username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234" },
  {
    username: "Pedro Rodriguez",
    email: "pedro@gmail.com",
    password: "1234456",
  },
  { username: "Juan Martinez", email: "juan@gmail.com", password: "12345678" },
];

const adresses = [
  { adress: "Juan de Castellanos", number: 24, userId: 1 },
  { adress: "Juan Vicente Gomez", number: 32, userId: 2 },
  { adress: "Gran Sabana", number: 1, userId: 3 },
];

const tasks = [
  {
    title: "New task",
    description: "Be a good persona",
    isComplete: true,
    userId: 1,
  },
  {
    title: "New task",
    description: "Practice more Enlgish",
    userId: 2,
  },
  {
    title: "New task",
    description: "To do English homework",
    userId: 3,
  },
  { title: "New task", userId: 3 },
];

const categories = [
  { name: "personality" },
  { name: "studies" },
  { name: "studies" },
];

db.sync({ force: false })
  .then(() => console.log("is sycronized"))
  .then(() => {
    console.log("seeding users");
    users.forEach((users) => Users.create(users));
  })
  .then(() => {
    console.log("seeding adresses");
    adresses.forEach((adress) => Address.create(adress));
  })
  .then(() => {
    console.log("seeding tasks");
    tasks.forEach((task) => Tasks.create(task));
  })
  .then(() => {
    console.log("seeding categories");
    categories.forEach((category) => Categories.create(category));
  });
