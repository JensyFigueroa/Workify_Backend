const { Service, User } = require('../db.js');

const serviceEnabledS = async (idService, nameService) => {


    const pro = await Service.findByPk(idService)
    if (!pro) {
        throw new Error(`There is no service in this User`)
    }

    const serv = await Service.findAll({ where: { nameService: nameService } })
    if (serv.length <= 0) {
        throw new Error(`There is no service with that name: "${nameService}"`);
    }



    const serviceToUpdate = serv[0];

    const updatedEnabledS = !serviceToUpdate.enabledS;



    const updatedService = await Service.update(

        {
            enabledS: updatedEnabledS
        },
        {
            where: { nameService: nameService },
            returning: true,
            attributes: ['enabledS']
        }
    );

    console.log('updatedService: ',updatedService);

    const [,objectService]=updatedService

    console.log('esto es objectService', objectService);

    return objectService[0];
};


module.exports = { serviceEnabledS };