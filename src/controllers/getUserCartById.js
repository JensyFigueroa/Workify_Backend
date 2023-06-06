const { Service, User } = require('../db.js');


// Ruta para obtener el detalle del servicio por ID
const getUserCartById = async (id) => {
   

    const userfiltered = await User.findByPk(id);
   

    if (!userfiltered){
        throw new Error('User not found')
    }
    
    const {cart} = userfiltered;

      const userCart =  cart

    return userCart;
};

module.exports = { getUserCartById };