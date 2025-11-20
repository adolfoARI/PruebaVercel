require("dotenv").config();
const express = require('express');
const userRouting = require('./routes/users')
const {swaggerDocs} = require ("./swagger")

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRouting)

swaggerDocs(app, port);

app.listen(port, ()=>{
    console.log('El servidor ha levantado, hola mundo')
})

