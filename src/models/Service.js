const { DataTypes } = require('sequelize');

module.exports = (sequilize) => {
    sequilize.define('Service', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1,
        },
        nameService: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        imagePublicId: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        imageUrl: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pricePerHour: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        contracts: {
            type: DataTypes.ARRAY(DataTypes.JSONB)
        },
        typeService: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reviews: {
            type: DataTypes.ARRAY(DataTypes.JSONB)
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        nameUser: {
            type: DataTypes.STRING,
        }
    })
};