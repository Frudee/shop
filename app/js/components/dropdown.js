const dropdown = () => {
  ///// GET ELEMENTS
  const sumArr = document.querySelectorAll(".dropdown__sum");
  const detArr = document.querySelectorAll(".dropdown__det");
  const dropdownWrapperArr = document.querySelectorAll(".dropdown-wrapper");

  let timeout = false;

  ///// ON MOUSE ENTER
  const detailsEnter = (event, i) => {
    detArr[i].setAttribute("open", "open");
    detArr[i].classList.remove("summary-closing");
    timeout = true;
    event.target.classList.contains("sum_hover")
      ? sumArr[i].classList.add("bigger")
      : "";
  };
  ///// ON MOUSE LEAVE
  const detailsLeave = (i) => {
    detArr[i].classList.add("summary-closing");
    timeout = false;
    sumArr[i].classList.remove("bigger");
    setTimeout(() => {
      if (!timeout) {
        detArr[i].removeAttribute("open");
        detArr[i].classList.remove("summary-closing");
      }
    }, 500);
  };

  ///// EVENT HANDLERS
  sumArr.forEach((el, i) => {
    el.addEventListener("mouseenter", (event) => {
      detailsEnter(event, i);
    });
    el.addEventListener("mouseleave", () => {
      detailsLeave(i);
    });
  });

  dropdownWrapperArr.forEach((el, i) => {
    el.addEventListener("mouseenter", (event) => {
      detailsEnter(event, i);
    });
    el.addEventListener("mouseleave", () => {
      detailsLeave(i);
    });
  });
};

////////////////////////

export default dropdown;
