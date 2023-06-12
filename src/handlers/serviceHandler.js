const { Service, User } = require('../db.js');
const { filterServiceId } = require('../controllers/getServicesById.js')
const { getServices } = require('../controllers/getServices.js')
const { createService } = require('../controllers/createService.js')
const { getServiceByName } = require('../controllers/getServiceByName.js')
const { postReview } = require('../controllers/createReview.js')
const { contractsServices } = require('../controllers/allContractsService.js')


const getServicesDB = async (req, res) => {

    console.log('Estoy en el handler de getServices');

    try {

        const services = await getServices();
        res.status(200).json(services);

    } catch (error) {
        console.log(error);
        return res.status(404).json({ error: error.message });
    }
};

const getServicesByName = async (req, res) => {
    const { name } = req.query;

    console.log('Estoy en el handler de service/name');

    try {

        const serviceByName = await getServiceByName(name)

        res.status(200).json(serviceByName);

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const getServiceDetailById = async (req, res) => {
    const { idService } = req.params;

    console.log('Estoy en el handler de service/id');

    try {

        const serviceDetail = await filterServiceId(idService)

        res.status(200).json(serviceDetail);

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const postService = async (req, res) => {
    const dataService = req.body;

    try {

        const newService = await createService(dataService)

        res.status(200).json(newService);

    } catch (error) {
        console.log(error);
        return res.status(404).json({ error });
    }
};

const postNewReview = async (req, res) => {
    const dataService = req.body;

    try {

        const newReview = await postReview(dataService)

        res.status(200).json(newReview);

    } catch (error) {
        console.log(error);
        return res.status(404).json({ error });
    }
};

const getContractsService = async (req, res) => {
    const { idService } = req.params;

    try {
        const contractsService = await contractsServices(idService)
        res.status(200).json(contractsService)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { getServiceDetailById, getServicesDB, postService, getServicesByName, postNewReview, getContractsService };

