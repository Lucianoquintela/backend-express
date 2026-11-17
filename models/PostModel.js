class PostModel {
     static lista = [
        {
            id: 1,
            titulo: "admin",
            conteudo: "dfgdgf",
            user_id: 1
        },
        {
            id: 2,
            titulo: "admin",
            conteudo: "fdgfdgfd",
            user_id: 2
        }
    ];

      static listar() {
        return PostModel.lista;
    }

    static consultarPorId(id) {
        const dados = PostModel.lista.filter(item => item.id == id)
        return dados;

    }

    static criar(data) {
        PostModel.lista.push(data)

    }

    static atualizar(id, data) {
    const indice = PostModel.lista.findIndex(item => item.id == id);

    if (indice === -1) {
        return null;
    }

    PostModel.lista[indice] = data;
    return data;
    }

    static deletar(id) {
        const dados = PostModel.lista.filter(item => item.id != id);
        PostModel.lista = dados;

    }

   


};
module.exports = PostModel;