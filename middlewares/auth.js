const { verificarToken } = require("../utils/jwt");
const Response = require("../models/StaticResponse");
const HttpStatus = require("../utils/HttpStatus");
const { UserResponseMessages, UserResponseCodes } = require("../utils/ResponseEnums");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    const response = Response.error(
      HttpStatus.UNAUTHORIZED,
      UserResponseCodes.UNAUTHORIZED,
      UserResponseMessages.REQUIRE_TOKEN
    );
    return res.status(response.statusCode).send(response);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verificarToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("ERROR JWT:", error);

    if (error.name === "TokenExpiredError") {
      const response = Response.error(
        HttpStatus.UNAUTHORIZED,
        UserResponseCodes.UNAUTHORIZED,
        UserResponseMessages.EXPIRED_TOKEN
      );
      return res.status(response.statusCode).send(response);
    }

    if (error.name === "JsonWebTokenError") {
      const response = Response.error(
        HttpStatus.UNAUTHORIZED,
        UserResponseCodes.UNAUTHORIZED,
        UserResponseMessages.INVALID_TOKEN
      );
      return res.status(response.statusCode).send(response);
    }

    const response = Response.error(
      HttpStatus.UNAUTHORIZED,
      UserResponseCodes.UNAUTHORIZED,
      "Error al validar el token"
    );

    return res.status(response.statusCode).send(response);
  }
}

module.exports = authMiddleware;
