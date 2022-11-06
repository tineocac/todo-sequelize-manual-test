const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");

const app = express();

const PORT = 8000;

db.authenticate() // devuleve una promesa
  .then(() => console.log("Seuccesfully aunthenticate"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("database syncroned"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json({ message: "this is a message" });
});

app.listen(PORT, () => {
  console.log(`server is running in the port${PORT}`);
});
