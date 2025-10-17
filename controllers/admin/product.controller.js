const Products = require("../../models/product.model.js");
const filterStatusHelpers = require("../../helpers/filterStatus");
const paginationHelper = require("../../helpers/paginationHelper.js");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  // console.log(req.query.status);

  // filter status
  const filterStatus = filterStatusHelpers(req.query);

  let obj = {
    deleted: false,
  };
  // http://localhost:1235/admin/products/?status=inactive
  // req.query get all element after "?"
  if (req.query.status) {
    obj.status = req.query.status;
  }

  // search
  const objectSearch = require("../../helpers/search")(req.query);
  if (objectSearch.regrex) {
    obj.title = objectSearch.regrex;
  }

  // Pagination
  const countProducts = await Products.countDocuments(obj);
  let objPagination = paginationHelper(
    {
      currentPage: 1,
      limitItems: 4,
    },
    req.query,
    countProducts
  );

  // console.log(countProducts);
  // End Pagination

  const products = await Products.find(obj)
    .limit(objPagination.limitItems)
    .skip(objPagination.skip);
  // console.log(products);

  res.render("admin/pages/products/index.pug", {
    title: "Product Management Admin",
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objPagination,
  });
};

// [GET] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  // http://localhost:1235/admin/products/change-status/:status/:id
  // with url above , use req.params
  // :status : truyền động.

  // console.log(req.params);
  const status = req.params.status;
  const id = req.params.id;

  await Products.updateOne({ _id: id }, { status: status });

  const previousPage = req.get("referer") || "/admin/products";
  res.redirect(previousPage);
};
