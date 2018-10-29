"use strict";
const profileContainer = document.querySelector("#profile");
fetch("males.json")
  .then(e => e.json())
  .then(showMales);

function showMales(data) {
  console.log(data.results);
  const profileTemplate = document.querySelector("template").content;

  data.results.forEach(profile => {
    let profileClone = profileTemplate.cloneNode(!0);
    profileClone.querySelector("h2").textContent =
      profile.name.first + " " + profile.name.last;
    profileClone.querySelector("h3").textContent =
      "City: " + profile.location.city;
    profileClone.querySelector("p").textContent = "Age: " + profile.dob.age;
    profileClone.querySelector("img").src = profile.picture.large;
    profileClone.querySelector("article").dataset.inToYou = profile.inToYou;
    profileContainer.appendChild(profileClone);
  });
  swiping(data.results);
}

function swiping() {
  var hammertime = new Hammer(profileContainer);
  hammertime.on("swipeleft swiperight", function(ev) {
    console.log(ev.type);
    if (ev.type === "swipeleft") {
      dontLike();
    } else if (ev.type === "swiperight") {
      like();
    }
  });
  function dontLike() {
    document.querySelector("#profile article:last-child").remove();
  }
  function like() {
    let person = document.querySelector("#profile article:last-child");
    if (person.dataset.inToYou == "true") {
      alert("The match!");
      dontLike();
    } else {
      alert("He is not into you!");
      dontLike();
    }
  }
}
