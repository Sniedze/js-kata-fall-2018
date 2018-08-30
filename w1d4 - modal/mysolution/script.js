"use strict";
const modal = document.querySelector("#modal_container");
const closeButton = document.querySelector("#closebutton");
const openButton = document.querySelectorAll("p a");

openButton.forEach(function(link) {
  link.addEventListener("click", showModal);
});

function showModal(link) {
  console.log("Show modal");
  modal.classList.remove("hidden");
}

closeButton.addEventListener("click", hideModal);
function hideModal() {
  console.log("Hide modal");
  modal.classList.add("hidden");
}
