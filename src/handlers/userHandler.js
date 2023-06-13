const { getUserById } = require('../controllers/getUserById.js')
const { updateCart } = require('../controllers/updateCart.js')
const { getUserCartById } = require('../controllers/getUserCartById.js')
const { vacateCart } = require('../controllers/vacateCart.js')
const { allUsersDb } = require('../controllers/allUsersDb.js')
const { allUsersBuys } = require('../controllers/allUsersBuys.js')
const { putEnabledUser } = require('../controllers/putEnabledUser.js')
const { getOnlyUserByEmail } = require('../controllers/getOnlyUserByEmail')

const getUserDetailById = async (req, res) => {
    const { idUser } = req.params;
    console.log(idUser,'iduser');
    try {

        const userDetail = await getUserById(idUser)

        res.status(200).json(userDetail);

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};


const getCartById = async (req, res) => {
    const userId = req.params.idUser
    console.log(userId, "getcart id");
    try {
        
        const userCart = await getUserCartById(userId)
        
        res.status(200).json(userCart);
        
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};



const updateUserCart = async (req, res) => {
    const userId = req.params.idUser
    const cart = req.body

    
    try {
        
        const messageSuccess = await updateCart(userId, cart);
        
        
        res.status(200).json(messageSuccess)
        
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const vacateUserCart = async (req, res) => {
    const { idUser } = req.params;
    
    
    try {
        
        const messageSuccess = await vacateCart(idUser);
        
        
        res.status(200).json(messageSuccess)
        
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const allUsers = await allUsersDb()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const userPayment = async (req, res) => {
    const { idUser } = req.params
    try {
        const allBuys = await allUsersBuys(idUser)
        res.status(200).json(allBuys)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

const enabledUser = async (req, res) => {
    const { idUser } = req.params;
    const { enabled } = req.body

    try {
        const userEnabled = await putEnabledUser(idUser)
        res.status(200).json(userEnabled)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getUserByEmail = async (req, res) => {
    const { email } = req.query;
    console.log(email, "email handler");

    console.log('Estoy en el handler de user/email');

    try {

        const userByName = await getOnlyUserByEmail(email)

        res.status(200).json(userByName);

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};



module.exports = { getUserDetailById, updateUserCart, getCartById, vacateUserCart, getUser, userPayment, enabledUser, getUserByEmail };