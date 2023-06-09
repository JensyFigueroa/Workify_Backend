const { Service, User } = require('../db.js');

const updateCart = async (userId, cart) => {
 
    try {
        const userToUpdate = await User.findByPk(userId);

        if (!userToUpdate) {
            throw new Error('Este usuario no existe');
        }

    
        await userToUpdate.update({ cart: cart });
        
        return 'Cart updated successfully';
    } catch (error) {
        console.error(error);
        throw new Error('Failed to add to cart');
    }

};

module.exports = { updateCart }
// const { Service, User } = require('../db.js');

// const updateCart = async (userId, cart) => {
//     try {
//         let userToUpdate = await User.findByPk(userId);
        
//     console.log(userToUpdate.cart);
//     if (!userToUpdate) {
//       throw new Error('This user does not exist');
//     }

//     let existingCart = userToUpdate.cart || [];
    

//     if (cart.length === 0) {
//       return 'No new items to add to the cart';
//     }

//     cart.forEach(item => {
//         //console.log(existingCart, "existing cart")
//         //console.log(item, "item del carrtio");
//       let existingItemIndex = existingCart.findIndex(existingItem => existingItem.id === item.id);
//       //console.log(existingItemIndex);
//       if (existingItemIndex !== -1) {
//         let existingQuantity = Number(existingCart[existingItemIndex].quantity);
//         let itemQuantity = Number(item.quantity);
//         existingCart[existingItemIndex].quantity = existingQuantity + itemQuantity; // Update quantity if item already exists
//       } else {
//         //console.log("holi");
//         existingCart.push(item); // Add new item to the cart
//       }
//     });
//     console.log(existingCart);
  
//     await userToUpdate.update({ cart: existingCart });
//     return userToUpdate.cart
//     return 'Cart updated successfully';
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to add to cart');
//   }
// };

//  module.exports = { updateCart };



// const { Service, User } = require('../db.js');

// const updateCart = async (userId, cart) => {
//     // console.log(userId, "usuario a put");
//     // console.log(cart, "cart a put");
//     try {
//         const userToUpdate = await User.findByPk(userId);

//         if (!userToUpdate) {
//             throw new Error('Este usuario no existe');
//         }

//         const existingCart = userToUpdate.cart || [];
//          //console.log(existingCart, "cart existente"); 
//          const filteredCart = cart.filter(item => {
//             return !existingCart.some(existingItem => existingItem.id === item.id);
//         });
//         if (filteredCart.length === 0) {
//             console.log('No new items to add to the cart');
//             return 'No new items to add to the cart';

//         }
//         const updatedCart = [...existingCart, ...filteredCart];
//       
//         await userToUpdate.update({ cart: updatedCart });
//         return userToUpdate.cart
//         return 'Cart updated successfully';
//     } catch (error) {
//         console.error(error);
//         throw new Error('Failed to add to cart');
//     }

// };

// module.exports = { updateCart }



