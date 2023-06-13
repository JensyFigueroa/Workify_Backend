const { Service, User } = require('../db.js');

const putEnabledUser = async (idUser) => {
    const user = await User.findByPk(idUser, { include: Service });

    if (!user) {
        throw new Error('This user does not exist');
    }

    const enabledU = user.enabled;
    const enabledUpdate = !enabledU;

    const alo = await Service.findAll({
        where: { UserId: idUser },
        attributes: ['enabledS']
    })
    console.log('alo', alo[0].enabledS);
    if (alo[0].enabledS === false) {
        console.log('entre');
    }
    const serviceEnabledS = await Service.update(
        { enabledS: enabledUpdate },
        {
            where: { UserId: idUser },
            returning: true
        }
    )

    const updatedUser = await User.update(
        { enabled: enabledUpdate },
        {
            where: { id: idUser },
            returning: true,
            attributes: ['enabled']
        }
    )



    const resultTotal = [...updatedUser, ...serviceEnabledS]

    return resultTotal;
}


module.exports = { putEnabledUser };
