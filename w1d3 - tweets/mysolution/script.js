"use strict";
const main = document.querySelector("main");
const template = document.querySelector("#template");

fetch("https://kea-alt-del.dk/twitter/api/?count=50/?hashtag=Javascript")
  .then(e => {
    return e.json();
  })
  .then(data => showTweets(data));

function showTweets(data) {
  data.statuses.forEach(data => {
    let clone = template.cloneNode(true).content;

    clone.querySelector(".date").textContent = data.created_at;
    clone.querySelector(".tweet-text").textContent = data.text;
    main.appendChild(clone);
  });
}
