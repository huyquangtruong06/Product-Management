const Products = require("../../models/product.model.js");
const filterStatusHelpers = require("../../helpers/filterStatus");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  // console.log(req.query.status);

  // filter status
  const filterStatus = filterStatusHelpers(req.query);

  let obj = {
    deleted: false,
  };
  if (req.query.status) {
    obj.status = req.query.status;
  }

  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const regrex = new RegExp(keyword, "i");
    obj.title = regrex;
  }

  const products = await Products.find(obj);
  // console.log(products);

  res.render("admin/pages/products/index.pug", {
    title: "Product Management Admin",
    products: products,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};
