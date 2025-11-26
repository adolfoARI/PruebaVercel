require("dotenv").config();
const express = require("express");
const userRouting = require("./routes/users")
const { swaggerDocs } = require("./swagger");

const app = express();

app.use(express.json());
app.use('/api', userRouting);

// 👉 RUTA PRINCIPAL PARA EVITAR "Cannot GET /"
app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

const isVercel = !!process.env.VERCEL;
swaggerDocs(app, isVercel ? null : 3000);

module.exports = app;
