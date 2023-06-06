const { Service, User } = require('../db.js');
const { getUserById } = require('../controllers/getUserById.js')
const { updateCart } = require('../controllers/updateCart.js')
const { getUserCartById } = require('../controllers/getUserCartById.js')
const { vacateCart } = require('../controllers/vacateCart.js')

const getUserDetailById = async (req, res) => {
    const {idUser} = req.params;
//console.log(idUser,'iduser');
    try {

        const userDetail = await getUserById(idUser)

        res.status(200).json(userDetail);

    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};


const getCartById = async (req, res) => {
    const  userId  = req.params.idUser
console.log( userId,"getcart id");
    try {

        const userCart = await getUserCartById(userId)

        res.status(200).json(userCart);

    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};



const updateUserCart = async (req, res) => {
    const  userId  = req.params.idUser
    const cart = req.body

  
    try {

        const messageSuccess = await updateCart(userId  , cart);


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




module.exports = { getUserDetailById, updateUserCart, getCartById, vacateUserCart };