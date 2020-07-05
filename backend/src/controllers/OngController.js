const connection = require('../database/connection');
const generateUniqueId = require('../utils/GenerateUniqueId');


module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id = generateUniqueId();

        console.log(id);

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return res.json({ id });
    }
};