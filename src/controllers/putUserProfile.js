const { Service, User } = require('../db.js');

const newUserProfile = async (idPro, name, email, country, city, phone, imagePublicId, imageUrl, description, buys) => {
    const idUserPro = await User.findByPk(idPro);

    if (!idUserPro) {
        throw new Error('Este usuario no existe');
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
            description,
            buys,
        },
        {
            where: { id: idPro },
            returning: true,
            attributes: ['id', 'name', 'email', 'country', 'city', 'phone', 'imagePublicId', 'imageUrl', 'description', 'buys'],
        }
    );

    return updatedUser;
};



module.exports = { newUserProfile }
