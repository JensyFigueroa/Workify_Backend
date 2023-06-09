const { newUserProfile } = require('../controllers/putUserProfile.js');


const putUserProfile = async (req, res) => {
    const { idPro } = req.params;
    const { name, email, country, city, phone, imagePublicId, imageUrl, description, portfolio, buys, paypalEmail, cart, enabled } = req.body

    // console.log('idhandler', idPro);
    try {

        const profileUser = await newUserProfile(idPro, name, email, country, city, phone, imagePublicId, imageUrl, description, portfolio, buys, paypalEmail, cart, enabled);


        res.status(200).json(profileUser)

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
module.exports = { putUserProfile };
