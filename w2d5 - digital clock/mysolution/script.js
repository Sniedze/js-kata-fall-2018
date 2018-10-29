"use strict";
document.addEventListener("DOMContentLoaded", getTime);

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const today = new Date();

const hours0 = addZero(today.getHours())
  .toString()
  .split("")[0];
const hours1 = addZero(today.getHours())
  .toString()
  .split("")[1];

const minutes0 = addZero(today.getMinutes())
  .toString()
  .split("")[0];
const minutes1 = addZero(today.getMinutes())
  .toString()
  .split("")[1];

const seconds0 = addZero(today.getSeconds())
  .toString()
  .split("")[0];
const seconds1 = addZero(today.getSeconds())
  .toString()
  .split("")[1];

let hDigitOne = document.querySelector(".hours span:first-child");
let hDigitTwo = document.querySelector(".hours span:nth-child(2)");

let mDigitOne = document.querySelector(".minutes span:first-child");
let mDigitTwo = document.querySelector(".minutes span:nth-child(2)");

let sDigitOne = document.querySelector(".seconds span:first-child");
let sDigitTwo = document.querySelector(".seconds span:nth-child(2)");

let hDigitOneString = "digit".concat(hours0);
let hDigitTwoString = "digit".concat(hours1);

let mDigitOneString = "digit".concat(minutes0);
let mDigitTwoString = "digit".concat(minutes1);

let sDigitOneString = "digit".concat(seconds0);
let sDigitTwoString = "digit".concat(seconds1);

function getTime() {
  hDigitOne.classList.add(hDigitOneString);
  hDigitTwo.classList.add(hDigitTwoString);

  mDigitOne.classList.add(mDigitOneString);
  mDigitTwo.classList.add(mDigitTwoString);

  sDigitOne.classList.add(sDigitOneString);
  sDigitTwo.classList.add(sDigitTwoString);
  setInterval(function() {
    getTime();
  }, 1000);
}
