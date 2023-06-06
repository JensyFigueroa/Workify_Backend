const { Service } = require('../db.js');

const postReview = async (body) => {
    console.log('entre e acreater review');
  try {
    const { serviceId, name, imageUrl, comment, rating } = body;

    const service = await Service.findByPk(serviceId);

    if (!service) {
      throw new Error('Service not found');
    }

    const existingReviews = service.reviews || [];

    const newReview = {
      name,
      imageUrl,
      comment,
      rating,
    };

    const updatedReviews = [...existingReviews, newReview];

    await service.update({ reviews: updatedReviews });

    return 'Comment added successfully';
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add comment');
  }
};

module.exports = { postReview };