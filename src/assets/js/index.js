const offcanvasStart = document.querySelector("#offcanvasScrolling");

window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    offcanvasStart.classList.add("show");
  }
});
