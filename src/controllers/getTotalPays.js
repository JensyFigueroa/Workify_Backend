const { Service, User } = require('../db.js');

const getTotalPays = async()=>{

    const allUsers = await User.findAll()

    const allPaysUsers = [];

    await Promise.all(allUsers.map(async user=>{
        await user.buys.map(buy=>allPaysUsers.push(buy))
    }))

    console.log('esto es para las compras ... ',allPaysUsers);

    return allPaysUsers
}

module.exports = {getTotalPays}