const express = require('express');
const UsuariosController = require('../controllers/UsuariosControler');
const UsuariosRotas = express.Router();
const usuariosController = new UsuariosController();


UsuariosRotas.get('/users', usuariosController.listar);
UsuariosRotas.get('/users/:id', usuariosController.consultarPorId);
UsuariosRotas.post('/users', usuariosController.criar);
UsuariosRotas.put('/users/:id', usuariosController.atualizar);
UsuariosRotas.delete('/users/:id', usuariosController.deletar);

module.exports = UsuariosRotas;