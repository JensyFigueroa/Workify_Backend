const { Service, User } = require('../db.js');

const allUsersDb = async () => {
    const users = await User.findAll();
    if (!users) throw new Error('not users found');
    console.log('users', users);
    return users
}

module.exports = { allUsersDb }