const { enabledService } = require('../controllers/putServiceProfile.js')

const profilePutServiceHandler = async (req, res) => {
    const { idService } = req.params;
    const { nameService } = req.body
    try {

        const serviceEnabled = await enabledService(idService, nameService)
        res.status(200).json(serviceEnabled)
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};



module.exports = { profilePutServiceHandler }