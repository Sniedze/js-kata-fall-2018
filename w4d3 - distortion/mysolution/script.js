"use strict";

const link = "https://kea-alt-del.dk/kata-distortion/";
window.addEventListener("DOMContentLoaded", setInterval);
const div = document.querySelector("div");

setInterval(function() {
  fetchData();
}, 3000);
function fetchData() {
  fetch(link)
    .then(result => result.json())
    .then(data => showNumber(data));
}

function showNumber(data) {
  console.log(data);
  let number = data.inQueue;
  console.log(number);
  visualization(number);
}

function visualization(number) {
  document.querySelector("body").innerHTML = "";
  for (let i = 0; i < number; i++) {
    let img = document.createElement("img");
    img.src = "glass.png";
    let count = document.createElement("h2");
    count.textContent = i + 1;
    document.body.appendChild(img);
    document.body.appendChild(count);
    img.style.width = "80px";

    //div.style.height = "100px";
    // div.style.margin = "20px";
    // div.style.backgroundColor = "blue";
  }
}
