const dropdown = () => {
  ///// GET ELEMENTS
  const summary = document.querySelector(".dropdown__sum");
  const details = document.querySelector(".dropdown__det");
  const dropdownWrapper = document.querySelector(".dropdown-wrapper");
  let timeout = false;

  ///// ON MOUSE ENTER
  const detailsEnter = (event) => {
    details.setAttribute("open", "open");
    details.classList.remove("summary-closing");
    timeout = true;
    event.target.classList.contains("dropdown__sum")
      ? summary.classList.add("bigger")
      : "";
  };
  ///// ON MOUSE LEAVE
  const detailsLeave = () => {
    details.classList.add("summary-closing");
    timeout = false;
    summary.classList.remove("bigger");
    setTimeout(() => {
      if (!timeout) {
        details.removeAttribute("open");
        details.classList.remove("summary-closing");
      }
    }, 500);
  };

  ///// EVENT HANDLERS
  summary.addEventListener("mouseenter", (event) => {
    detailsEnter(event);
  });

  dropdownWrapper.addEventListener("mouseenter", (event) => {
    detailsEnter(event);
  });

  summary.addEventListener("mouseleave", () => {
    detailsLeave();
  });

  dropdownWrapper.addEventListener("mouseleave", () => {
    detailsLeave();
  });
};

////////////////////////

export default dropdown;
