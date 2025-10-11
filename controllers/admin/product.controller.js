const Products = require("../../models/product.model.js");

// [GET ] /admin/products
module.exports.index = async (req, res) => {
  // console.log(req.query.status);
  let filterStatus = [
    { name: "Tất cả", status: "", class: "" },
    { name: "Hoạt động", status: "active", class: "" },
    { name: "Không hoạt động", status: "inactive", class: "" },
  ];

  if (req.query.status) {
    const index = filterStatus.findIndex(
      (item) => item.status === req.query.status
    );
    filterStatus[index].class = "active";
  } else {
    const index = filterStatus.findIndex((item) => item.status === "");
    filterStatus[index].class = "active";
  }

  let obj = {
    deleted: false,
  };
  if (req.query.status) {
    obj.status = req.query.status;
  }

  const products = await Products.find(obj);
  // console.log(products);

  res.render("admin/pages/products/index.pug", {
    title: "Product Management Admin",
    products: products,
    filterStatus: filterStatus,
  });
};
