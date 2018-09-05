"use strict";

const animals = [
  "dog",
  "cat",
  "horse",
  "cat",
  "mouse",
  "dog",
  "cat",
  "cat",
  "dog"
];
let indexes = [];
let i;
function findAll(arr, search) {
  for (i = 0; i < arr.length; i++)
    if (arr[i] === search) {
      indexes.push(i);
    }
  return indexes;
}

const catsAt = findAll(animals, "cat");
console.log(catsAt);
