const { Service, User } = require('../db.js');
const { registerUser } = require('../controllers/registerUser.js')

const registerNewUser = async (req, res) => {
    const dataUser = req.body;
    try {
        const newUserMessage = await registerUser(dataUser)
        console.log('entro al try de login');

        res.status(200).json(newUserMessage);
        
    } catch (error) {
        console.log("entre a este 404");
        return res.status(404).json({ error });
    }
};
module.exports = { registerNewUser };