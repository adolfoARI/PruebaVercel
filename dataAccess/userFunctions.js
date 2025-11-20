const {Pool}= require('pg');

//Conexion usando el database_url
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, //Esta es la variable de entorno
    ssl:false
})

async function insertUserVLA(username, password, state)
{
    const result = await pool.query(
        'SELECT insert_user_vla_fn($1, $2, $3) AS result',
            [username, password, state]);
    return result.rows[0].result;
}

async function sumarValores(valor1,valor2) {
    
    const result = await pool.query(
        'SELECT sumar_valores_fn($1, $2) AS result',
            [valor1, valor2]);
    return result.rows[0].result;
}

async function updateUser(userId, password, state = true)
{    
    const result = await pool.query(
        'SELECT update_user_vla_fn($1,$2,$3) AS result',
            [userId, password,state]);
    return result.rows[0].result;
}

async function existUser(username)
{    
    const result = await pool.query(
        'SELECT user_vla_exist_fn($1) AS result',
            [username]);
    return result.rows[0].result;
}

module.exports = {
    sumarValores,
    insertUserVLA, 
    updateUser,
    existUser
}