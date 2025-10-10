module.exports.index = (req, res) => {
  res.render("admin/pages/products/index.pug", {
    title: "Product Management Admin",
  });
};
