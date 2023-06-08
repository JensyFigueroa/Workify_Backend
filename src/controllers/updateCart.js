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
         console.log(existingCart, "cart existente"); 
         const filteredCart = cart.filter(item => {
            return !existingCart.some(existingItem => existingItem.id === item.id);
        });
        if (filteredCart.length === 0) {
            return 'No new items to add to the cart';
        }
        const updatedCart = [...existingCart, ...filteredCart];

        await userToUpdate.update({ cart: updatedCart });

        return 'Cart updated successfully';
    } catch (error) {
        console.error(error);
        throw new Error('Failed to add to cart');
    }

};

module.exports = { updateCart }