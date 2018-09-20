"use strict";

window.addEventListener("DOMContentLoaded", setInterval);
const div = document.querySelector("div");

setInterval(function() {
  init();
}, 2000);

function init() {
  let hue = Math.floor(Math.random() * 50);
  let saturation = Math.floor(Math.random() * 100) + "%";
  let light = Math.floor(Math.random() * 100) + "%";
  div.style.backgroundColor = `hsl(${hue}, ${saturation}, ${light})`;
}
