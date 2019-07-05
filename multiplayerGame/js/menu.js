const hamburger_btn = document.querySelector(".navigation__hamburger"),
      menu = document.querySelector(".page__wrapper");

hamburger_btn.addEventListener("click", () => {
    menu.classList.toggle("--menu-closed");
});


