"use strict";
const main = document.querySelector("main");
const template = document.querySelector("#template");

fetch("jason.json")
  .then(result => result.json())
  .then(data => createContainers(data));

function createContainers(tweets) {
  tweets.forEach(tweet => {
    let section = document.createElement("section");

    section.id = tweet.coreArea;
  });
  main.appendChild(section);
}
fetch("jason.json")
  .then(result => result.json())
  .then(data => show(data));

function show(data) {
  data.forEach(element => {
    const section = document.querySelector("#" + element.coreArea);
    let clone = template.cloneNode(true).content;

    clone.querySelector(".profile-image").textContent = element.coreArea;

    clone.querySelector(".author").textContent = element.content;
    clone.querySelector(".date").textContent = "Knowledge";
    clone.querySelector(".tweet-text").textContent = "Skills";
    clone.querySelector(".link").textContent = "Competences";
    clone.querySelector(".tweet-image").textContent = element.content;
    clone.querySelector(".author").textContent = element.content;

    section.appendChild(clone);
  });
}
