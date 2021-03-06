// Specify .env file path for Knex-cli to load the config
// to be able to run migrations and seedings
require('dotenv').config({ path: '../.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
    },
  },
  production: {
    client: 'pg',
    connection: `postgres://sunwayteam:sunwayteam@acm-instance.ciaf3tfcclfe.us-east-1.rds.amazonaws.com:5432/acmserver`,
  },
};
