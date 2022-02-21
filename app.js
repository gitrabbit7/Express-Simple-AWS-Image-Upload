/**
 * Module dependencies.
 */
require('dotenv').config();

var express = require("express"),
		routes = require("./routes"),
		http = require("http"),
		path = require("path");

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", routes.index);

app.use('/upload', require('./routes/upload'));

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
