const { Service, User } = require('../db.js');
const { getUserById } = require('../controllers/getUserById.js')

const getUserDetailById = async (req, res) => {
    const {idUser} = req.params;
console.log(idUser,'iduser');
    try {

        const userDetail = await getUserById(idUser)

        res.status(200).json(userDetail);

    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};
module.exports = { getUserDetailById };