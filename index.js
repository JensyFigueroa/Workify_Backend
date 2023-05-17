const { conn } = require('./src/db.js');
const server = require('./src/app')


conn.sync({ force: false }).then(async () => {
    console.log('connect to DB')
    server.listen(3001, () => {
        console.log('listening at 3001'); // eslint-disable-line no-console
    });
});
