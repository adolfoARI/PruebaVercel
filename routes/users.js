const express = require('express')
const router = express.Router();

const userController = require('../controllers/user')
const authMiddleware = require('../middlewares/auth')

const {validateLogin} = require('../middlewares/validators/UserValidator')
const {validateCreateUser} = require("../middlewares/validators/CreateUserValidator")
const {validateDeleteUser} = require("../middlewares/validators/DeleteUserValidator")

//Rutas publicas
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Endpoints relacionados con usuarios
 */


/**
 * @swagger
 * /UserLogin:
 *   post:
 *     summary: Inicia sesión en el sistema
 *     description: Permite que un usuario se autentique con su nombre de usuario y contraseña.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin124
 *               password:
 *                 type: string
 *                 example: Prueba123
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT generado al iniciar sesión
 *                 user:
 *                   type: object
 *                   description: Información del usuario autenticado
 *                   properties:
 *                     id:
 *                       type: string
 *                     username:
 *                       type: string
 */
router.post("/UserLogin", validateLogin, userController.Login)

//Ruta protegida
/**
 * @swagger
 * /CreateUser:
 *   post:
 *     summary: Creacion de usuario
 *     description: Permite crear un usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin124
 *               password:
 *                 type: string
 *                 example: Prueba123
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT generado al iniciar sesión
 *                 user:
 *                   type: object
 *                   description: Información del usuario autenticado
 *                   properties:
 *                     id:
 *                       type: string
 *                     username:
 *                       type: string
 */
      .post("/CreateUser",authMiddleware ,validateCreateUser,userController.CreateUser)
      .delete("/DeleteUser", authMiddleware, validateDeleteUser, userController.DeleteUser)
      .post("/EditUser", authMiddleware,userController.UpdateUserByUserName)

module.exports = router;