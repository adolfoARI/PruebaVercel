const testDAL = require("../dataAccess/userFunctions")

async function sumarValores(req, res){
    const {valor1,valor2} = req.body;

    const resultado = await testDAL.sumarValores(valor1, valor2);

    console.log(resultado)

    res.send({resultado})
}

async function insertUserVLA(req, res){
    const {username, password, state} = req.body;

    const resultado = await testDAL.insertUserVLA(username, password, state);

    res.send({resultado})
}

async function updateUserVLA(req, res){
    const {username, password, state} = req.body;

    const resultado = await testDAL.insertUserVLA(username, password, state);

    res.send({resultado})
}

async function existUser(req, res){
    const {username} = req.body;

    const resultado = await testDAL.existUser(username);

    res.send({resultado})
}

module.exports = {
    sumarValores,
    insertUserVLA,
    updateUserVLA,
    existUser
}