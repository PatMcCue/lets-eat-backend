const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL || "");

console.log(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  postgres: {
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {},
    },
  },
});
//   {
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "strapi-hook-bookshelf",
//       settings: {
//         client: "postgres",
//         host: config.host,
//         port: config.port,
//         database: config.database,
//         username: config.user,
//         password: config.password,
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// }
