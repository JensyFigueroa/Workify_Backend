const { Service, User } = require('../db.js');

const putEnabledUser = async (idUser) => {
    const user = await User.findByPk(idUser)

    if (!user) {
        throw new Error('This user does not exist')
    }

    const enabledU = user.enabled

    const enabledUpdate = !enabledU

    const userEnabled = await User.update(
        {
            enabled: enabledUpdate
        },
        {
            where: { id: idUser },
            returning: true,
            attributes: ['enabled']
        }
    )

    return userEnabled

};

module.exports = { putEnabledUser }