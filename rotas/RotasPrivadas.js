const express = require('express');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const UsuariosRotas = require('./UsuariosRotas');
const PostsRotas = require('./PostsRotas');

const RotasPrivadas = express.Router();

RotasPrivadas.use((req,res,next)=>{
    let auth = false
    if(req.headers.token) {
        const { token } = req.headers;
        try {
            jwt.verify(token, process.env.APP_KEY_TOKEN)
            auth = true;  

        } catch(e){
            return res.status(403).send(e);

        }
        
    }
    if(auth === false) {
         return res.status(403).send("Não Autorizado");
    } 
    next(); 
    
   

});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);

module.exports = RotasPrivadas;
