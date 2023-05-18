const { Service, User } = require('../db.js');


// Ruta para obtener el detalle del servicio por ID
const filterServiceId = async (id) => {

    console.log('Entre al controller de service');

    const idString = id.toString();

    const servicefiltered = await Service.findByPk(idString, {
           include: [User],
         });

    if (!servicefiltered){
        throw new Error('Service not found')
    }
    
    const { imageUrl, nameService, typeService, description, location, reviews } = servicefiltered;

        const serviceDetail = {
            imageUrl,
            nameService,
            typeService,
            description,
            location,
            reviews
        };

    return serviceDetail;
};

module.exports = { filterServiceId };

