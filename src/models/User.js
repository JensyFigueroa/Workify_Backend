const { DataTypes } = require('sequelize');

module.exports = (sequilize) => {
    sequilize.define('User', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 18,
                max: 120,
            }
        },
        location: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        expertice: {
            type: DataTypes.ARRAY(DataTypes.STRING),
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
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        portfolio: {
            type: DataTypes.STRING,
        }
    })
};