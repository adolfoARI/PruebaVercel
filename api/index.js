
// api/index.js
const serverless = require("serverless-http");
const app = require("../app"); // importar app.js explícitamente

module.exports = serverless(app);


