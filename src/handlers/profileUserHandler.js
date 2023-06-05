const { Service, User } = require('../db.js');
const { postUserProfile } = require('../controllers/getProfileUser.js')

const getUserProfile = async (req, res) => {
    const { idPro } = req.params;
    const { name, email, country, city, phone, imagePublicId, imageUrl, description, buys } = req.body

    console.log('idhandler', idPro);
    try {

        const profileUser = await postUserProfile(idPro, name, email, country, city, phone, imagePublicId, imageUrl, description, buys);


        res.status(200).json(profileUser)

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
module.exports = { getUserProfile };
