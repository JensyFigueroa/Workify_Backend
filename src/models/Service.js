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
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        location: {
            type: DataTypes.JSON,
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
        pricePerHoure: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        contracts: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
        },
        typeService: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reviews: {
            type: DataTypes.JSON,
            unique: true,
        }
    })
};