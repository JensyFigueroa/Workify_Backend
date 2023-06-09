const { Service, User } = require('../db.js');

const enabledService = async (idService, nameService) => {


    const pro = await User.findByPk(idService, { include: Service })


    const serv = await Service.findAll({ where: { nameService: nameService } })
    if (serv.length <= 0) {
        throw new Error(`there is no service with that name: "${nameService}"`);
    }

    const servnew = Service.update({
        enabledS: false
    }, {
        where: { nameService: nameService },
        returning: true,
        attributes: ['enabledS']
    })

    return servnew
};




module.exports = { enabledService }