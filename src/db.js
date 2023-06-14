// require('dotenv').config();


// const { Sequelize } = require('sequelize');

// const fs = require('fs');

// const path = require('path');
// const { log } = require('console');

// const { DB_USERS, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, DB_DEPLOY } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USERS}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false, native: false });
// // const sequelize = new Sequelize(DB_DEPLOY, {
// //     logging: false, // set to console.log to see the raw SQL queries
// //     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// // });
// console.log(sequelize);
// const basename = path.basename(__filename);

// const modelDefiners = [];
// // leemos todos los archivos de la carpeta model los requerimos y los agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
//     .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//     .forEach((file) => {
//         modelDefiners.push(require(path.join(__dirname, '/models', file)));
//     });

// modelDefiners.forEach(model => model(sequelize)) // inyectamos la coneccion sequelize a todos los modelos

// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);


// const { User, Service } = sequelize.models;
// //User.belongsToMany(Service, { through: 'services_user' });
// //Service.belongsToMany(User, { through: 'services_user' });

// User.hasMany(Service, {
//     foreignKey: {
//         allowNull: false,
//     },
//     onDelete: 'CASCADE',
// });
// Service.belongsTo(User);

// module.exports = {
//     ...sequelize.models, conn: sequelize
// };




//------------------- cometnar arriba para develop y cometnar abajo para main------------

require('dotenv').config();


const { Sequelize } = require('sequelize');

const fs = require('fs');

const path = require('path');

const { DB_USERS, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USERS}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false, native: false });

const basename = path.basename(__filename);

const modelDefiners = [];
// leemos todos los archivos de la carpeta model los requerimos y los agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

    modelDefiners.forEach(model => model(sequelize)) // inyectamos la coneccion sequelize a todos los modelos
    
    // Capitalizamos los nombres de los modelos ie: product => Product
    let entries = Object.entries(sequelize.models);
    let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
    sequelize.models = Object.fromEntries(capsEntries);
    
    
    const { User, Service } = sequelize.models;
    //User.belongsToMany(Service, { through: 'services_user' });
    //Service.belongsToMany(User, { through: 'services_user' });
    
    User.hasMany(Service, {
        foreignKey: {
            allowNull: false,
        },
        onDelete: 'CASCADE',
    });
    Service.belongsTo(User);

module.exports = {
    ...sequelize.models, conn: sequelize
};
