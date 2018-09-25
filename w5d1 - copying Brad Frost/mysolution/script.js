"use strict";
let i;
let colors = ["#76752B", "#C23D3D", "#3C6783", "#431212", "#C2C133"];
createBubbles(700);
function createBubbles(amount) {
  for (i = 0; i < amount; i++) {
    let circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.style.fill = colors[Math.floor(Math.random() * colors.length)];
    let app = document.querySelector("svg");
    app.appendChild(circle);
    assignStyles();
  }
}

function assignStyles() {
  let bubbles = document.querySelectorAll("circle");
  for (i = 0; i < bubbles.length; i++) {
    assignSize(bubbles[i]);
    assignPosition(bubbles[i]);
    assignColor(bubbles[i]);
  }
}

function assignSize(bubble) {
  let randomSize = Math.floor(Math.random() * 3);
  bubble.style.r = randomSize;
  //   bubble.style.height = randomSize + "px";
  //   bubble.style.borderRadius = "50%";
}

function assignPosition(bubble) {
  let randomPositionX = Math.floor(Math.random() * 100);
  let randomPositionY = Math.floor(Math.random() * 15);
  bubble.style.cx = randomPositionX;
  bubble.style.cy = randomPositionY;
}

function assignColor(bubble) {
  bubble.addEventListener("mouseover", function() {
    bubble.style.fill = colors[Math.floor(Math.random() * colors.length)];
  });
}
