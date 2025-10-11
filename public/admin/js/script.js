const listButtonStatus = document.querySelectorAll("[button-status]");
// console.log(buttonStatus);
if (listButtonStatus.length > 0) {
  let url = new URL(window.location.href); // a new url
  //   console.log(url);
  for (let i = 0; i < listButtonStatus.length; i++) {
    listButtonStatus[i].addEventListener("click", (e) => {
      const status = listButtonStatus[i].getAttribute("button-status");
      if (status) {
        url.searchParams.set("status", status);
        listButtonStatus[i].classList.toggle(".");
      } else {
        url.searchParams.delete("status");
      }
      //   console.log(url.href);
      window.location.href = url.href; // assign a new url for old url
    });
  }
}
