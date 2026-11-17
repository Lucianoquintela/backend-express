const express = require('express');
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');
const host = "localhost";
const port = 3000; 
const app = express()

app.use(express.json())


app.get('/',(req,res) => {
    return res.send("Olá, eu sou um Backend com NodeJS + Express")
});


app.use(RotasPublicas);
app.use(RotasPrivadas);



app.put('/teste/:codigo',(req,res) => {
    // Querys
    const query = req.query;
    let dados = "Query: " +  query.nome + " - "  + query.sobrenome;

    //Params
    const params = req.params.codigo;
    dados += "<br > params: " + params.codigo

    // Body
    const body = req.body;
    dados += "<br > body: " + JSON.stringify(body);
    return res.send(dados);
});

app.listen(port, host,()=>{
    console.log(`Servidor executando em https://${host}:${port}`)
});