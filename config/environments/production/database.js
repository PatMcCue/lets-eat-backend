const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL || "");

console.log(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",

    connection: {
      connectionString: process.env.DATABASE_URL,
      schema: "public", // Not required
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
  // postgres: {
  //   connection: {
  //     connectionString: process.env.DATABASE_URL,
  //     ssl: false,
  //   },
  // },
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
