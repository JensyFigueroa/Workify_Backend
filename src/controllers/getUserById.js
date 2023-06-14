const { Service, User } = require('../db.js');


// Ruta para obtener el detalle del servicio por ID
const getUserById = async (id) => {

  console.log(id, "id");

  try {
    const userfiltered = await User.findByPk(id, {
      include: Service
    });


    if (!userfiltered) {
      throw new Error('User not found')
    }

    const { name, email, country, city, phone, adminStatus, description, buys, Services, imageUrl, enabled } = userfiltered;

    const userDetail = {
      id,
      name,
      email,
      country,
      city,
      phone: phone || "",
      adminStatus,
      description,
      buys,
      imageUrl,
      Services,
      enabled
    }

    return userDetail;
  } catch (error) {
    res.status(404).json({ error: error.message })
  }

};

module.exports = { getUserById };