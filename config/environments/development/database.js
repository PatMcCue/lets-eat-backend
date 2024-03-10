const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL || "");
const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL || ""
);

console.log(host, port, database, user, password);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "strapi-hook-bookshelf",
      settings: {
        client: "postgres",
        host: host,
        port: port,
        database: database,
        username: user,
        password: password,
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

// {
//   "defaultConnection": "default",
//   "connections": {
//     "default": {
//       "connector": "strapi-hook-bookshelf",
//       "settings": {
//         "client": "sqlite",
//         "filename": ".tmp/data.db"
//       },
//       "options": {
//         "useNullAsDefault": true
//       }
//     }
//   }
// }
