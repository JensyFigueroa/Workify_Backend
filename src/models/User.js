const { DataTypes } = require('sequelize');

module.exports = (sequilize) => {
    sequilize.define('User', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        country: {
            type: DataTypes.STRING,
           
        },
        city: {
            type: DataTypes.STRING,
            
        },
        phone: {
            type: DataTypes.STRING,
            
        },
        credential: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        imagePublicId: {
            type: DataTypes.STRING,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        adminStatus: {
            type: DataTypes.BOOLEAN,
            
        },
        description: {
            type: DataTypes.STRING,
            
        },
        portfolio: {
            type: DataTypes.STRING,
        }
    })
};