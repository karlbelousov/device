const openButtonCart = document.querySelector(".user-menu__button--open-cart");
const cart = document.querySelector(".cart");
const openSubmenu = document.querySelector(".menu-list__button");
const submenu = document.querySelector(".submenu");
const tabsItems = document.querySelectorAll(".services__tabs-item");
const delivery = document.querySelector(".delivery");
const modalContainer = document.querySelector(".modal-overlay");
const modal = modalContainer.querySelector(".modal");
const modalcloseButton = modal.querySelector(".modal__close-button");

openButtonCart.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

openSubmenu.addEventListener("click", (evt) => {
  evt.preventDefault();
  openSubmenu.classList.toggle("open");
  submenu.classList.toggle("submenu--open");
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
