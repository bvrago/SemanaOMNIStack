const connection = require('../database/connection')
//const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const {title, description, value} = request.body; 
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({title, description, value, ong_id,});

        return response.json({id: id, msg: "Caso criado!!!"});
    }, 

//    async index(request, response) {   
//        const ong_id = request.headers.authorization;
//        const incidents = await connection('incidents').select('*');
//        return response.json(incidents);
//    },   
    
    async index(request, response) {   
        const {page = 1} = request.query;
        const ong_id = request.headers.authorization;

        var [count] = await connection('incidents').count();

        var incidents = await connection('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset((page-1)*5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        if (ong_id == null || ong_id == '')
        {   
            incidents = await connection('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset((page-1)*5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
            [count] = await connection('incidents').count();
        }
        else
        {
            incidents = await connection('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset((page-1)*5).where('ong_id', ong_id).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
            [count] = await connection('incidents').where('ong_id', ong_id).count();
        };

        response.header ('X-Total-Count', count['count(*)']);

        return response.json({count: count, incidents: incidents});
    },


    async delete(request, response) {   
        const {id} = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id !== ong_id){
            return response.status(401).json({error: 'id inválido para operação!'}); 
        }
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }
}