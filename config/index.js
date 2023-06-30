const database = require("./database");
const layout = require("./layout");

module.exports = {
  database,
  layout,
  debug: true,
  port: process.env.APPLICATION_PORT,
  cookie_secretkey: process.env.COOKIE_SECRETKEY,
  siteurl: process.env.WEBSITE_URL,
};
