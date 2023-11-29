const express = require("express");

const app = express();

require("./middlewares")(app);
require("./db")
require("./routes")(app);

module.exports = app;