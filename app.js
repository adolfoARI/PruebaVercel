require("dotenv").config();
const express = require("express");
const userRouting = require("./routes/users")
const { swaggerDocs } = require("./swagger");

const app = express();

app.use(express.json());
app.use('/api', userRouting)

const isVercel = !!process.env.VERCEL; 

swaggerDocs(app, isVercel ? null : 3000);
module.exports = app;