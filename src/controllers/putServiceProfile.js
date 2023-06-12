const { Service, User } = require('../db.js');

const enabledService = async (idService, nameService) => {


    const pro = await User.findByPk(idService, { include: Service })
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


    return updatedService;
};


module.exports = { enabledService };


