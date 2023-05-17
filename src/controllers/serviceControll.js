const { Service, User } = require('../db.js');




// Ruta para obtener el detalle del servicio por ID
const filterServiceId = async (id) => {
    const idString = id.toString();
    const servicefiltered = await Service.findOne({
        where: {
            id: idString
        }
    })
    return servicefiltered
};

module.exports = { filterServiceId };

