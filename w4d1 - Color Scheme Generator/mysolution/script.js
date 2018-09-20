"use script";
createDivs();
function createDivs() {
  for (i = 0; i < 5; i++) {
    div = document.createElement("div");
    document.body.appendChild(div);
    assignColor(div);
  }
}
function assignColor(div) {
  let hue = Math.floor(Math.random() * 50);
  let saturation = Math.floor(Math.random() * 100) + "%";
  let light = Math.floor(Math.random() * 100) + "%";
  div.style.backgroundColor = `hsl(${hue}, ${saturation}, ${light})`;
  const clone = document.querySelector("#template").content.cloneNode(true);
  clone.querySelector(
    "h1"
  ).textContent = `hsl(${hue}, ${saturation}, ${light})`;
  clone.querySelector("h2").textContent = `CSS: background-color:${
    div.style.backgroundColor
  }`;
  document.body.appendChild(clone);
}
