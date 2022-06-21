const express = require("express");
const router = express.Router();

const usuarios = require("./api/usuarios/usuarios.controler");


router.use("/usuarios",usuarios);  //vao procurar o destino usuarios

module.exports = router;