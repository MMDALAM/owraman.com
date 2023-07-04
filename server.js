require("app-module-path").addPath(__dirname);
global.config = require("./config");
require("dotenv").config();

const App = require("./app");

new App();
