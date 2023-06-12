const { Service, User } = require('../db.js');

const allUsersBuys = async (idUser) => {
    const user = await User.findByPk(idUser);

    const { buys } = user

    return buys;
};

module.exports = { allUsersBuys };
