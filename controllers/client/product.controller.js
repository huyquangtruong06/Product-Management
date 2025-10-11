const Products = require("../../models/product.model.js");

// [GET ] /products
module.exports.index = async (req, res) => {
  const products = await Products.find({
    // stock: { $gte: 70 }, // >= 70.
  });
  console.log("products:", products);

  res.render("client/pages/products/index.pug", {
    title: "Product Page",
    products,
  });
};
