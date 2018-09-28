"use strict";
let X = 1000;
let rnd;

const values = {
  totalRolls: X,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};

for (let i = 0; i < X; i++) {
  rnd = 1 + Math.floor(Math.random() * 6);
  values[rnd.toString()] += 1;
}

console.log(values);
