
// app.js
require("dotenv").config();
const express = require("express");
const userRouting = require("./routes/users");
const { swaggerDocs } = require("./swagger");

const app = express();
app.use(express.json());

// IMPORTANTE: montar el router en raíz
app.use('/', userRouting); // o simplemente: app.use(userRouting)

app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

swaggerDocs(app);

module.exports = app;
