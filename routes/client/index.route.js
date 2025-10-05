const productRoutes = require("./product.route.js");
const homeRoutes = require("./home.route.js");

module.exports = (app) => {
  //   app.get("/", (req, res) => {
  //     //   res.send("Trang chủ"); // server send text "Trang chủ" to browser.
  //     res.render("client/pages/home/index.pug");
  //   });
  app.use("/", homeRoutes);
  app.use("/products", productRoutes);
};
