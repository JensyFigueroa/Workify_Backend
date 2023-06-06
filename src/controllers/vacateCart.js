const { Service, User } = require('../db.js');



const vacateCart = async (id) => {

    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate){
        throw new Error('User not found')
    }
    await userToUpdate.update({ cart: [] });

    return 'Cart vacated';
};

module.exports = { vacateCart };