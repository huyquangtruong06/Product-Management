const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
});

const Product = mongoose.model("Product", ProductSchema, "Products");
module.exports = Product;
