const loginLink = document.querySelector(".search-button");
const loginPopup = document.querySelector(".modal");

 loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.toggle("modal-show");
});



