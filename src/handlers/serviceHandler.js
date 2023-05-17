const { Service, User } = require('../db.js');
const { filterServiceId } = require('../controllers/serviceControll.js')



const getServiceDetailById = async (req, res) => {
    const { id } = req.params;

    try {
        const serviceId = await filterServiceId.findByPk(id, {
            include: [User],
        });

        const { imgagePublicId, nameService, typeService, description, location, reviews } = serviceId;

        const serviceDetail = {
            imgagePublicId,
            nameService,
            typeService,
            description,
            location,
            reviews
        };

        res.status(200).json(serviceDetail);

    } catch (error) {
        return res.status(404).json({ error: 'Service not found' });
    }
};

module.exports = { getServiceDetailById };

