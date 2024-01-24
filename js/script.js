const openButtonCart = document.querySelector(".user-menu__button--open-cart");
const cart = document.querySelector(".cart");
const openSubmenu = document.querySelector(".menu-list__button");
const submenu = document.querySelector(".submenu");
const tabsItems = document.querySelectorAll(".services__tabs-item");

openButtonCart.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

openSubmenu.addEventListener("click", (evt) => {
  evt.preventDefault();
  openSubmenu.classList.toggle("open");
  submenu.classList.toggle("submenu--open");
});

tabsItems.forEach((tabItem) => {
  tabItem.addEventListener("click", (evt) => {
    console.log("Click!");
    tabItem.classList.remove("active");
    evt.target.classList.add("active");
  });
});
