const jwt = require("jsonwebtoken");

// 🔥 Clave fija quemada en el código
const SECRET_KEY = "mi_clave_super_secreta_2025";

function generarToken(usuario) {
  return jwt.sign(
    { username: usuario.username },
    SECRET_KEY,
    { expiresIn: "15m" }  // o lo que quieras
  );
}

function verificarToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = {
  generarToken,
  verificarToken
};
