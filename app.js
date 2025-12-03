require("dotenv").config();
const express = require("express");

const userRouting = require("./routes/users");
const { swaggerDocs } = require("./swagger");

const app = express();

// Body parser correcto para Vercel
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.use("/", userRouting);

app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

module.exports = app;
