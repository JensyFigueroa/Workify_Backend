const { Service, User } = require('../db.js');

const newUserProfile = async (idPro, name, email, country, city, phone, imagePublicId, imageUrl, description, portfolio, buys, paypalEmail, cart, enabled) => {
    const idUserPro = await User.findByPk(idPro, { include: Service });
    // console.log('idUserPro', idUserPro);

    if (!idUserPro) {
        throw new Error('Username does not exist');
    }

    const [rowsUpdated, [updatedUser]] = await User.update(
        {
            name,
            email,
            country,
            city,
            phone,
            imagePublicId,
            imageUrl,
            portfolio,
            description,
            buys,
            paypalEmail,
            cart,
            enabled,
        },
        {
            where: { id: idPro },
            returning: true,
            attributes: ['id', 'name', 'email', 'country', 'city', 'phone', 'imagePublicId', 'imageUrl', 'description', 'portfolio', 'buys', 'paypalEmail', 'cart', 'enabled'],
        }
    )
    return updatedUser;


};



module.exports = { newUserProfile }
