"use strict";

// window.addEventListener("DOMContentLoaded", init);
// let modifyArray;
// let infoArray;
// let newArray;
// let i;
// let element;

// function init() {
//   modifyArray = document.querySelectorAll("#modify ul li");
//   infoArray = document.querySelectorAll("#info ul li");
//   newArray = document.querySelectorAll("#newarray ul li");

//   listMethods(modifyArray);
//   listMethods(infoArray);
//   listMethods(newArray);
// }

// function displayElement(element) {
//   console.log("\u2022" + element.textContent);
// }

// function listMethods(array) {
//   let headingTwo = array[0].parentElement.parentElement.querySelector("h2")
//     .textContent;
//   console.log(headingTwo);
//   for (i = 0; i < array.length; i++) {
//     displayElement(array[i]);
//   }
// }

let i;

listMethods("modify");
listMethods("info");
listMethods("newarray");

function displayElement(element) {
  console.log("\u2022" + element.textContent);
}
// TODO: Create listMethods function
function listMethods(param) {
  let sectionId = "#" + param + " ul " + " li ";
  let headingTwo = document.querySelector(`${"#" + param + " h2 "}`)
    .textContent;
  console.log(headingTwo);
  let array = document.querySelectorAll(`${sectionId}`);
  for (i = 0; i < array.length; i++) {
    displayElement(array[i]);
  }
}
