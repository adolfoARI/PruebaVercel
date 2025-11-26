require("dotenv").config();
const express = require("express");
const userRouting = require("./routes/users")
const { swaggerDocs } = require("./swagger");

const app = express();

app.use(express.json());
app.use('/api', userRouting)

if(process.env.NODE_ENV !== "production")
    swaggerDocs(app,3000)

module.exports = app;