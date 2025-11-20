const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY || "mi_claver_super_secreta";

function generarToken(usuario){
    return jwt.sign(
        {username: usuario.username},
        SECRET_KEY,
        {expiresIn:'60s'}    
    )
}

function verificarToken(token){    
        return jwt.verify(token,SECRET_KEY);    
}

module.exports = {
    generarToken,
    verificarToken
}