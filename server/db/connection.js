const knex = require("knex");
const config = require("../../knexfile");

//workout what environmnet we are in eg development
const environment = process.env.NODE_ENV || "development";

//connect to the database using the environment-specific config
const connection = knex(config[environment]);

module.exports = connection;
