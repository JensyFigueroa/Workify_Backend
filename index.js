const { conn } = require("./src/db.js");
const server = require("./src/app");

conn.sync({ force: false }).then(async () => {
  console.log("connect to DB");
  server.listen(process.env.PORT, () => {
    console.log('%s listening at', process.env.PORT); // eslint-disable-line no-console
  });
});


