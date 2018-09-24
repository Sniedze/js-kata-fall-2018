"use strict";

const addButton = document.querySelector("#add-button");
let phoneNumber = document.querySelector("h2");
let number = 2164099997;
showNumber(number);
addButton.addEventListener("click", addButtonClicked);

function addButtonClicked() {
  number++;
  showNumber(number);
  console.log(number);
}
function showNumber(number) {
  const numToString = number.toString();
  phoneNumber.textContent = `(${numToString.substring(
    0,
    3
  )})${numToString.substring(3, 6)}-${numToString.substring(6)}`;
}
