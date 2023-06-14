const { Service, User } = require('../db.js');
const { Op } = require('sequelize');

const contractsServices = async (idService) => {
    const services = await User.findByPk(idService, { include: Service })



    if (!services) {
        throw new Error('No services for this user')
    }

    const contractsService = await Service.findAll({
        where: {
            contracts: {
                [Op.not]: null
            }
        }
    })

    console.log('contrc', contractsService);

    if (contractsService.length <= 0) {
        throw new Error('There are no registered contracts')
    }

    console.log('contract', contractsService);

    return contractsService

}

module.exports = { contractsServices }