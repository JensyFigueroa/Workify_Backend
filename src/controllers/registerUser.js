const { Service, User } = require('../db.js');

const registerUser = async ({ name, email, country, city, phone, credential, imagePublicId, imageUrl, adminStatus, description, portfolio, id, google }) => {



    //  const { name, email, country, city, phone, credential, imagePublicId, imageUrl, adminStatus, description, portfolio, id, google } = body;
    console.log("entre al register controler");

    console.log(name, "nombre");
    console.log(id, "nombre");
    console.log(email, "nombre");
    console.log(country, "nombre");
    console.log(city, "nombre");
    

    const [user, created] = await User.findOrCreate({
        where: { id: id },
        defaults: {
            id: id,
            name: name,
            email: email,
            country: country,
            city: city,
            phone: phone,
            credential: credential,
            imagePublicId: imagePublicId,
            imageUrl: imageUrl,
            adminStatus: adminStatus,
            description: description,
            portfolio: portfolio,
        },
    });

    if (google) {

    } else if (!created) {
        return 'The email has already been registered'
    } else return 'User registered successfully'




}
module.exports = { registerUser }