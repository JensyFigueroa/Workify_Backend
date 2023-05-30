const { Service, User } = require('../db.js');
const { Op } = require('sequelize');

const getServiceByName = async (name) => {
    console.log(name)

    const dbServicesByName = await Service.findAll({
        where: {
            nameService: {
                [Op.iLike]: `%${name}%`
            }
        },
        // include: [{
        //     model: User,
        //     attributes: ['name', 'email'],
        //     through: {
        //         attributes: [],
        //     }
        // }]
    });

    const servicesByName = dbServicesByName.map(service => {
        return {
            id: service.id,
            nameService: service.nameService,
            location: service.location,
            imageUrl: service.imageUrl,
            pricePerHour: service.pricePerHour,
            typeService: service.typeService,
        }
    
    })

    //console.log(services, "que tengo en la base de datos filtrados")

    return servicesByName;

}
module.exports = { getServiceByName }