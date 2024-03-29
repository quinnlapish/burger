var express = require("express");
var PORT = process.env.PORT || 3306;
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("index.handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controllers");
app.use(routes);
app.listen(PORT, function() {
 console.log("Server listening on: http://localhost:" + PORT);
});
