const { Service, User } = require('../db.js');

const createService = async (body) => {
  const { nameService, location, imageUrl, description, pricePerHour, typeService, UserId } = body;

  const user = await User.findByPk(UserId);
  if (!user) {
    throw new Error('User not found for userId: ' + UserId);
  }

  const newService = await Service.create({
    nameService: nameService,
    location: location,
    imageUrl: imageUrl,
    description: description,
    pricePerHour: pricePerHour,
    typeService: typeService,
    UserId: UserId,
  });

  const message = 'The service ' + nameService + ' was created.';
  return message;
};

module.exports = { createService };