
// const { conn } = require("./src/db.js");
// const server = require("./src/app");

// conn.sync({ force: false }).then(async () => {
//   console.log("connect to DB");
//   server.listen(process.env.PORT, () => {
//     console.log('%s listening at', process.env.PORT); // eslint-disable-line no-console
//   });
// });
//------------------- cometnar arriba para develop y cometnar abajo para main------------
const { conn } = require("./src/db.js");
const server = require("./src/app");

conn.sync({ force: false }).then(async () => {
  console.log("connect to DB");
  server.listen(3001, () => {
    console.log("listening at 3001"); // eslint-disable-line no-console
  });
});
