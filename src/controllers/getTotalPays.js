const { Service, User } = require('../db.js');

const getTotalPays = async()=>{

    const allUsers = await User.findAll()

    console.log('esto es lo que esta en allUsers: ',allUsers);

    const allPaysUsers = [];

    await Promise.all(allUsers.map(async user=>{
        if (user.buys!==null){
            await user.buys.map(buy=>allPaysUsers.push(buy))
        }
    }))

    console.log('esto es para las compras ... ',allPaysUsers);

    return allPaysUsers
}

module.exports = {getTotalPays}