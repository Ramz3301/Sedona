
 const loginLink = document.querySelector(".search-button");
 const loginPopup = document.querySelector(".modal");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

 loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.toggle("modal-show");
});



