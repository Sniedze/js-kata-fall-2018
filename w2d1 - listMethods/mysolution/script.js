"use strict";

window.addEventListener("DOMContentLoaded", init);
let modifyArray;
let infoArray;
let newArray;
let i;
let element;

function init() {
  modifyArray = document.querySelectorAll("#modify ul li");
  infoArray = document.querySelectorAll("#info ul li");
  newArray = document.querySelectorAll("#newarray ul li");

  listMethods(modifyArray);
  listMethods(infoArray);
  listMethods(newArray);
}

function displayElement(element) {
  console.log("\u2022" + element.textContent);
}

function listMethods(array) {
  let headingTwo = array[0].parentElement.parentElement.querySelector("h2")
    .textContent;
  console.log(headingTwo);
  for (i = 0; i < array.length; i++) {
    displayElement(array[i]);
  }
}
