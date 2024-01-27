const openButtonCart = document.querySelector(".user-menu__button--open-cart");
const cart = document.querySelector(".cart");
const openSubmenu = document.querySelector(".menu-list__button");
const submenu = document.querySelector(".submenu");
const tabsItems = document.querySelectorAll(".services__tabs-item");
const main = document.querySelector(".main");
const delivery = main.querySelector(".delivery");
const modalContainer = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const modalcloseButton = document.querySelector(".modal__close-button");
const servicesTabs = main.querySelectorAll(".services__tabs-item");
const servicesItems = main.querySelectorAll(".services__item");

openButtonCart.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

openSubmenu.addEventListener("click", (evt) => {
  evt.preventDefault();
  openSubmenu.classList.toggle("open");
  submenu.classList.toggle("submenu--open");
});

servicesTabs.forEach((servicesTab) => {
  const tabBtn = servicesTab.querySelector(".button");
  tabBtn.addEventListener("click", () => {
    let currentTub = main.querySelector(".services__tabs-item.active");
    currentTub.classList.remove("active");
    servicesTab.classList.add("active");

    servicesItems.forEach((item) => {
      if (tabBtn.dataset.tub == item.dataset.value) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

function onEscKeyDown(evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeModal();
  }
}

function openModal() {
  modalContainer.classList.remove("hidden");
  modal.classList.add("modal-open");
  modalcloseButton.addEventListener("click", closeModal);
  document.addEventListener("keydown", onEscKeyDown);
}

function closeModal() {
  modalContainer.classList.add("hidden");
  modal.classList.remove("modal-open");
  modalcloseButton.removeEventListener("click", closeModal);
  document.removeEventListener("keydown", onEscKeyDown);
}

delivery.addEventListener("click", openModal);
