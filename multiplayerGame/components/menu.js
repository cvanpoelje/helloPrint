const hamburger_btn = document.querySelector(".navigation__hamburger"),
      pageWrapper = document.querySelector(".page__wrapper");

hamburger_btn.addEventListener("click", () => {
    pageWrapper.classList.toggle("--menu-closed");
});
