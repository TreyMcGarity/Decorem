require("dotenv").config();
const knex = require("knex");

const environment = process.env.NODE_ENV || "development";

module.exports = knex(require("../knexfile")[environment]);