const express = require('express');

const routes = express.Router();
/* 
Métodos HTTP 
GET     - Buscar informação no backend
POST    - Criar informação no backend
PUT     - Alterar informação no backend
DELETE  - Deletar informação no backend
*/

/*
Parametros
Query       - Parametros nomeados enviados na rota apos o '?' (filtros/paginação) Ex: 'localhost:3333/users?name=Bruno' 
Route       - Parametros utilizados para identificar recursos  (apos a '/' - Ex: 'localhost:3333/users/x')
Requst Body - Corpo da requisição utilizado para criar ou alterar recursos 
*/


//PARAMETRO QUERY
//app.get('/users', (request, response) => {
    //const params = request.query; //busca dados da query utilizada na url

//PARAMETRO ROUTE
//app.get('/users/:id', (request, response) => {   
//    const params = request.params; //busca dados da URL

//PARAMETRO REQUEST BODY 
routes.post('/users', (request, response) => {   
    const body = request.body; 
//


console.log(body);

    //return response.send('Hello!!!');
    return response.json({
        evento: 'Semana OMNISTACK', 
        aluno: 'Bruno V'
    })

});

module.exports = routes;