const { Service, User } = require('../db.js');
const { Op } = require('sequelize');

const getOnlyUserByEmail = async (email) => {
    console.log(email, "controler email.")

    const userfiltered = await User.findAll({
        where: {
            email: {
                [Op.iLike]: `%${email}%`
            }
        },
         include: Service    
    });
console.log(userfiltered[0], "sisas");
    // const {  id, name, country, city, phone, adminStatus, description, buys, Services, imageUrl, enabled } = userfiltered;

    // const userDetail =  { 
    //   id,
    //   name,
    //   email,
    //   country,
    //   city,
    //   phone: phone || "",
    //   adminStatus,
    //   description,
    //   buys,
    //   imageUrl,
    //   Services,
    //   enabled
    // }

    //console.log(services, "que tengo en la base de datos filtrados")

    return userfiltered[0];

}
module.exports = { getOnlyUserByEmail }