"use strict";
let i;
let array = document.querySelectorAll("ul li");

function removeBadReview(value, arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].firstChild.textContent < value) {
      arr[i].remove();
    }
  }
}
removeBadReview(6, array);
