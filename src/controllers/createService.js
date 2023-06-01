const { Service, User } = require('../db.js');

const createService = async (body) => {
  const { nameService, location, imageUrl, description, pricePerHour, typeService, UserId, reviews } = body;
  console.log(UserId);
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
    reviews: reviews,
    UserId: UserId,
  });

  // console.log('servicio', newService);
  const message = 'The service ' + nameService + ' was created.';
  return message;
};

module.exports = { createService };