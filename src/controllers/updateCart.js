const { Service, User } = require('../db.js');

const updateCart = async (userId, cart) => {
    // console.log(userId, "usuario a put");
    // console.log(cart, "cart a put");
try {
    const userToUpdate = await User.findByPk(userId);

    if (!userToUpdate) {
        throw new Error('Este usuario no existe');
    }

    const existingCart = userToUpdate.cart || [];

    const updatedCart = [...existingCart, ...cart];

    await userToUpdate.update({ cart: updatedCart });

    return 'Cart updated successfully';
} catch (error) {
    console.error(error);
    throw new Error('Failed to add to cart');
}
    
};

module.exports = { updateCart }