"use strict";
const main = document.querySelector("main");
const template = document.querySelector("#template");

fetch("https://kea-alt-del.dk/twitter/api/")
  .then(e => {
    return e.json();
  })
  .then(showTweets);

function showTweets(data) {
  data.forEach(data => {
    let clone = template.cloneNode(true).content;

    clone.querySelector(".date").textContent = data.statuses.created_at;
    clone.querySelector(".tweet-text").textContent = data.statuses.text;
    section.appendChild(clone);
  });
}
