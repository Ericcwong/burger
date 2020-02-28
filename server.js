//Dependencies
const express = require("express");
const exphbs = require("express-handlebars")
//Calling express function as app
//setting PORT to whatever heroku calls if not 9000 localhost:
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(__dirname + '/public'));

//Middleware handling all the data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Importing routes
const routes = require("./controllers/burgers_controller.js");

app.use(routes);
//Starts the server
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});
