// Change Status
const buttonsChangeStatus = document.querySelectorAll("[button-change-status]");
// console.log(buttonsChangeStatus);

if (buttonsChangeStatus.length > 0) {
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");
  // console.log(path);

  buttonsChangeStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("data-status");
      const id = button.getAttribute("data-id");
      // console.log(`${status} - ${id}`);
      let statusChange = status == "active" ? "inactive" : "active";
      // console.log(statusChange);

      const action = path + `/${statusChange}/${id}?_method=PATCH`;
      // console.log(action);

      formChangeStatus.action = action;
      formChangeStatus.submit();
    });
  });
}

// End Status
