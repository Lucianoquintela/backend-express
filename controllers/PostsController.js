const PostModel = require('../models/PostModel');

class PostController {

    listar(req,res) {
        const dados = PostModel.listar();
        return res.json(dados);
    }

    consultarPorId(req,res) {
        const id = req.params.id;
        const dados =  PostModel.consultarPorId(id);
        return res.json(dados)
    }

    criar(req,res) {
        const body = req.body;
        PostModel.criar(body);
        return res.status(201).json({
            message: "Post cadastrado com sucesso"
        })

    }

    atualizar(req,res) {
        const id = req.params.id;
        const body = req.body;
        PostModel.atualizar(id, body);
        return res.json({
            message: "Usuário atualizado com sucesso"
        })

        
    }

    deletar(req,res) {
        const id = req.params.id;
        PostModel.deletar(id);
        return res.json({
            message: "Post removido com sucesso"
        })
    }
 
}

module.exports = PostController;