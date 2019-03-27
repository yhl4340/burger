var express = require("express");
var port = process.env.port || 8081;
var routes = require("./controllers/burgers_controllers");
var app = express();
// middle ware to pare info and encode the url
app.use(express.urlencoded({ extended: true }));
// middle ware to parse the info we get back into json
app.use(express.json());
app.use(express.static("public"));

// handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them


app.use(routes);

app.listen(port, function() {
  console.log("port listening: http://localhost:" + port);
});
