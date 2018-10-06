"use strict";
// import Chart from "chart.js";

let X = 1000;
let rnd;
let values = {
  totalRolls: X,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};
generateRolls();
function generateRolls() {
  values.totalRolls = X;
  for (let i = 0; i < X; i++) {
    rnd = 1 + Math.floor(Math.random() * 6);
    values[rnd]++;
  }

  console.log(values);
  //createChart();
}

// let ctx = document.querySelector("#myChart");

// function createChart() {
//   //console.log(values);

//   var myChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(153, 102, 255, 0.2)",
//             "rgba(255, 159, 64, 0.2)"
//           ],
//           borderColor: [
//             "rgba(255,99,132,1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)"
//           ],
//           borderWidth: 1
//         }
//       ]
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true
//             }
//           }
//         ]
//       }
//     }
//   });
// }
