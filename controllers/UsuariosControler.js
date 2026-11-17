const UsuarioModel = require('../models/UsuarioModel');

class UsuariosController {

    listar(req,res) {
        const dados = UsuarioModel.listar();
        return res.json(dados);
    }

    consultarPorId(req,res) {
        const id = req.params.id;
        const dados =  UsuarioModel.consultarPorId(id);
        return res.json(dados)
    }

    criar(req,res) {
        const body = req.body;
        UsuarioModel.criar(body);
        return res.status(201).json({
            message: "Usuário cadastrado com sucesso"
        })

    }

    atualizar(req,res) {
        const id = req.params.id;
        const body = req.body;
        UsuarioModel.atualizar(id, body);
        return res.json({
            message: "Usuário atualizado com sucesso"
        })

        
    }

    deletar(req,res) {
        const id = req.params.id;
        UsuarioModel.deletar(id);
        return res.json({
            message: "Usuário removido com sucesso"
        })
    }
 
}

module.exports = UsuariosController;