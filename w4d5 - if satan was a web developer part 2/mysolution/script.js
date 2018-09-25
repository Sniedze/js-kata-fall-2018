"use strict";

window.addEventListener("DOMContentLoaded", generate);

function generate() {
  let chars = "0123456789", //from https://forum.jquery.com/topic/javascript-to-generate-a-5-digit-fixed-length-random-number
    result = "";
  for (let i = 10; i > 0; --i) {
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  }
  showNumber(result);
}
function showNumber(number) {
  const phone = document.querySelector("h1 span");

  phone.textContent = number;
}

document.querySelector("#noButton").addEventListener("click", generate);
