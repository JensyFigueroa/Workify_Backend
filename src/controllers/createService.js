const { Service, User } = require('../db.js');

const createService = async (body) => {

      const { nameService, location, imageUrl, description, pricePerHour, typeService, idUser } = body;
  
      const newService = await Service.create({
        nameService: nameService,
        location: location,
        imageUrl: imageUrl,
        description: description,
        pricePerHour: pricePerHour,
        typeService: typeService
      });
  
      const message = 'The service ' + nameService + ' was created.'
      return message
    }
module.exports = {createService}