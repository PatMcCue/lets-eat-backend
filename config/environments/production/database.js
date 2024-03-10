const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL || "");

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "strapi-hook-bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
<<<<<<< HEAD

// postgres: {
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: false,
//   },
// },
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
=======
>>>>>>> parent of e352b84 (fixing Postgres connection string)
