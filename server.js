var express = require('express');

var bodyParser = require('body-parser');

var exphbs = require('express-handlebars');

var routes = require("./controller/controller.js");

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");

// app.use("/", routes);

app.listen(port, function() {

	console.log("Port:", port);
})

app.get("/", function(req, res) {
	console.log("home page");
	res.render("index", {title: "Home Page"});
})

