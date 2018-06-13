
var fs = require("fs");
var express = require("express");
app = express();


var indexRoutes = require("./routes/index");

app.set("view engine", "ejs");

app.use("", indexRoutes);
app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT);