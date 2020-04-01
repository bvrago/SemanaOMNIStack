//const crypto = require('crypto');
//const connection = require('./database/connection')

const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


routes.get('/profiles', ProfileController.index);

routes.post('/sessions', SessionController.create);



//routes.post('/ongs', async (request, response) => {   
    //const {name, email, whatsapp, city, uf} = request.body; 
    //const id = crypto.randomBytes(4).toString('HEX');
    //await connection('ongs').insert({id, name, email, whatsapp, city, uf,});
    //return response.json({ id: id, msg:"inserido OK!"});

module.exports = routes; 