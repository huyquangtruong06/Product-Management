const express = require("express"); // import library Express
require("dotenv").config(); // import library dotenv to read file .env
const app = express(); // Create a application Express (app object).
const port = process.env.PORT; // port which server will use to run, http://localhost:1235

// embedded
const route = require("./routes/client/index.route.js");

const database = require("./config/database.js");
database.connect();

// "views" is the default option name in Express, used to refer to the folder containing the interface files.
// "./views" is the path to that directory, The views folder is at the same level as the index.js file.
app.set("views", "./views");
// "view engine" is the default option to declare the template engine
// we choose "pug" → means the .pug files in the views folder will be used for rendering.
app.set("view engine", "pug");

app.use(express.static("public")); // setup static files (css, js, images...)

// Routes.
route(app);

// define a route for GET method at original URL '/'
// when u access address http://localhost:1235/, callback function (req, res) => { ... } will be called.
// req: (request) Contains information requested from the client (browser).
// res: (response) is the object to send feedback to the client.
// app.get("/", (req, res) => {
//   //   res.send("Trang chủ"); // server send text "Trang chủ" to browser.
//   res.render("client/pages/home/index.pug");
// });

// app.get("/products", (req, res) => {
//   res.render("client/pages/products/index.pug");
// });

// this code warm-up server.
// server will listen at port 1235.
// when it success listen, it print console.
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
