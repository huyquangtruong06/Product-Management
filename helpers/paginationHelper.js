module.exports = (objPagination, query, countProducts) => {
  if (query.page) {
    objPagination.currentPage = parseInt(query.page);
  }
  objPagination.skip =
    (objPagination.currentPage - 1) * objPagination.limitItems;
  // console.log(objPagination.skip);

  const totalPage = Math.ceil(countProducts / objPagination.limitItems);
  //   console.log(totalPage);
  objPagination.totalPage = totalPage;

  return objPagination;
};
