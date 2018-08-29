let button = document.querySelector(".accept");

button.addEventListener("click", buttonClicked);
function buttonClicked() {
  console.log("First clicked");
  document.querySelector(".box").classList.add("slide");
}
