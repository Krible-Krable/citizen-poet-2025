const registrationPopup = document.querySelector(".popup");
const regPopupButton = document.querySelector("#js_reg");
const openPopup = document.querySelector(".popup_is-opened");
const closePopup = document.querySelector(".popup__close");

function openedPopup(popup) {
  popup.classList.add("popup_is-opened");
}

function closedPopup(popup) {
  popup.classList.remove("popup_is-opened");
}

regPopupButton.addEventListener("click", () => {
  openedPopup(registrationPopup);
});

closePopup.addEventListener("click", () => {
  closedPopup(registrationPopup);
});

function closeByClickonOverlay(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  if (registrationPopup.classList.contains("popup_is-opened")) {
    closedPopup(registrationPopup);
  }
}

registrationPopup.addEventListener("click", closeByClickonOverlay);
