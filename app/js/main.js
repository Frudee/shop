const summary = document.querySelector(".dropdown__sum");
const details = document.querySelector(".dropdown__det");
const dropdownWrapper = document.querySelector(".dropdown-wrapper");
timeout = false;
isMouseOver = false;

summary.addEventListener("click", function (e) {
  if (details.classList.contains("summary-closing")) {
    return;
  }
  if (details.open) {
    e.preventDefault();
    details.classList.add("summary-closing");
    // set mouseover and ismouseover
    // setTimeout(() => {
    //   details.removeAttribute("open");
    //   details.classList.remove("summary-closing");
    // }, 500);
  }
});

summary.addEventListener("mouseenter", (event) => {
  // if (details.classList.contains("summary-closing")) {
  //   return;
  // }
  // details.classList.remove("summary-closing");
  // details.setAttribute("open", "open");
  // timeout = true;
  details.setAttribute("open", "open");
  details.classList.remove("summary-closing");
  summary.classList.add("bigger");
  timeout = true;
  // setTimeout(() => {
  //   details.removeAttribute("open");
  //   details.classList.remove("summary-closing");
  // }, 1000);
  if (details.classList.contains("summary-closing")) {
    // dropdownWrapper.style.animationPlayState = "initial";
  }
});
dropdownWrapper.addEventListener("mouseenter", (event) => {
  details.setAttribute("open", "open");
  details.classList.remove("summary-closing");
  timeout = true;
  // setTimeout(() => {
  //   details.removeAttribute("open");
  //   details.classList.remove("summary-closing");
  // }, 1000);
  if (details.classList.contains("summary-closing")) {
    dropdownWrapper.style.animationPlayState = "initial";
  }
});

summary.addEventListener("mouseleave", (event) => {
  // details.setAttribute("open", "open");
  details.classList.add("summary-closing");
  timeout = false;
  summary.classList.remove("bigger");
  setTimeout(() => {
    if (timeout) {
      return;
    }
    details.removeAttribute("open");
    details.classList.remove("summary-closing");
  }, 500);
});
dropdownWrapper.addEventListener("mouseleave", (event) => {
  // details.setAttribute("open", "open");
  details.classList.add("summary-closing");
  timeout = false;
  summary.classList.remove("bigger");
  setTimeout(() => {
    if (timeout) {
      return;
    }
    details.removeAttribute("open");
    details.classList.remove("summary-closing");
  }, 500);
});
