/////spin wheel/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [{ minDegree: 0, maxDegree: 360, value: 1 }];

const rotationValues6 = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];
const rotationValues5 = [
  { minDegree: 0, maxDegree: 18, value: 2 },
  { minDegree: 19, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 162, value: 5 },
  { minDegree: 163, maxDegree: 234, value: 4 },
  { minDegree: 235, maxDegree: 305, value: 3 },
  { minDegree: 306, maxDegree: 360, value: 2 },
];
const rotationValues7 = [
  { minDegree: 0, maxDegree: 38.6, value: 2 },
  { minDegree: 38.7, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 141.4, value: 7 },
  { minDegree: 141.5, maxDegree: 192.8, value: 6 },
  { minDegree: 192.9, maxDegree: 244.2, value: 5 },
  { minDegree: 244.3, maxDegree: 295.6, value: 4 },
  { minDegree: 395.7, maxDegree: 347, value: 3 },
  { minDegree: 348, maxDegree: 360, value: 3 },
];
const rotationValues4 = [
  { minDegree: 0, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 180, value: 4 },
  { minDegree: 181, maxDegree: 270, value: 3 },
  { minDegree: 271, maxDegree: 360, value: 2 },
];
const rotationValues3 = [
  { minDegree: 0, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 210, value: 3 },
  { minDegree: 211, maxDegree: 330, value: 2 },
  { minDegree: 331, maxDegree: 360, value: 1 },
];
const rotationValues2 = [
  { minDegree: 0, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 270, value: 2 },
  { minDegree: 271, maxDegree: 360, value: 1 },
];
const rotationValues8 = [
  { minDegree: 0, maxDegree: 45, value: 2 },
  { minDegree: 46, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 135, value: 8 },
  { minDegree: 136, maxDegree: 180, value: 7 },
  { minDegree: 181, maxDegree: 225, value: 6 },
  { minDegree: 226, maxDegree: 270, value: 5 },
  { minDegree: 271, maxDegree: 315, value: 4 },
  { minDegree: 316, maxDegree: 360, value: 3 },
];
const rotationValues9 = [
  { minDegree: 0, maxDegree: 10, value: 3 },
  { minDegree: 11, maxDegree: 40, value: 2 },
  { minDegree: 41, maxDegree: 80, value: 1 },
  { minDegree: 81, maxDegree: 120, value: 9 },
  { minDegree: 121, maxDegree: 160, value: 8 },
  { minDegree: 161, maxDegree: 200, value: 7 },
  { minDegree: 201, maxDegree: 240, value: 6 },
  { minDegree: 241, maxDegree: 280, value: 5 },
  { minDegree: 281, maxDegree: 320, value: 4 },
  { minDegree: 321, maxDegree: 360, value: 3 },
];
const rotationValues10 = [
  { minDegree: 0, maxDegree: 18, value: 3 },
  { minDegree: 19, maxDegree: 54, value: 2 },
  { minDegree: 55, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 126, value: 10 },
  { minDegree: 127, maxDegree: 162, value: 9 },
  { minDegree: 163, maxDegree: 198, value: 8 },
  { minDegree: 199, maxDegree: 234, value: 7 },
  { minDegree: 235, maxDegree: 270, value: 6 },
  { minDegree: 271, maxDegree: 306, value: 5 },
  { minDegree: 307, maxDegree: 342, value: 4 },
  { minDegree: 343, maxDegree: 360, value: 3 },
];
const rotationValues11 = [
  { minDegree: 0, maxDegree: 24.56, value: 3 },
  { minDegree: 24.57, maxDegree: 57.28, value: 2 },
  { minDegree: 57.29, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 122.72, value: 11 },
  { minDegree: 122.73, maxDegree: 155.44, value: 10 },
  { minDegree: 155.45, maxDegree: 188.16, value: 9 },
  { minDegree: 188.17, maxDegree: 220.88, value: 8 },
  { minDegree: 220.9, maxDegree: 253.6, value: 7 },
  { minDegree: 253.7, maxDegree: 286.32, value: 6 },
  { minDegree: 286.33, maxDegree: 319.04, value: 5 },
  { minDegree: 319.1, maxDegree: 351.76, value: 4 },
  { minDegree: 351.77, maxDegree: 360, value: 3 },
];
const rotationValues12 = [
  { minDegree: 0, maxDegree: 30, value: 3 },
  { minDegree: 31, maxDegree: 60, value: 2 },
  { minDegree: 61, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 120, value: 12 },
  { minDegree: 121, maxDegree: 150, value: 11 },
  { minDegree: 151, maxDegree: 180, value: 10 },
  { minDegree: 181, maxDegree: 210, value: 9 },
  { minDegree: 211, maxDegree: 240, value: 8 },
  { minDegree: 241, maxDegree: 270, value: 7 },
  { minDegree: 271, maxDegree: 300, value: 6 },
  { minDegree: 301, maxDegree: 330, value: 5 },
  { minDegree: 331, maxDegree: 360, value: 4 },
];
const rotationValues13 = [
  { minDegree: 0, maxDegree: 6.93, value: 4 },
  { minDegree: 6.94, maxDegree: 34.62, value: 3 },
  { minDegree: 34.63, maxDegree: 62.31, value: 2 },
  { minDegree: 62.32, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 117.69, value: 13 },
  { minDegree: 117.7, maxDegree: 145.38, value: 12 },
  { minDegree: 145.4, maxDegree: 173.07, value: 11 },
  { minDegree: 173.1, maxDegree: 200.76, value: 10 },
  { minDegree: 201, maxDegree: 228.45, value: 9 },
  { minDegree: 228.5, maxDegree: 256.14, value: 8 },
  { minDegree: 256.15, maxDegree: 283.83, value: 7 },
  { minDegree: 283.84, maxDegree: 311.52, value: 6 },
  { minDegree: 311.53, maxDegree: 339.21, value: 5 },
  { minDegree: 339.22, maxDegree: 360, value: 4 },
];
const rotationValues14 = [
  { minDegree: 0, maxDegree: 12.858, value: 4 },
  { minDegree: 13.858, maxDegree: 38.564, value: 3 },
  { minDegree: 39.564, maxDegree: 64.278, value: 2 },
  { minDegree: 65.278, maxDegree: 89.992, value: 1 },
  { minDegree: 90, maxDegree: 114.706, value: 14 },
  { minDegree: 115.706, maxDegree: 140.42, value: 13 },
  { minDegree: 141.42, maxDegree: 166.134, value: 12 },
  { minDegree: 167.134, maxDegree: 191.848, value: 11 },
  { minDegree: 192.848, maxDegree: 217.562, value: 10 },
  { minDegree: 218.562, maxDegree: 243.276, value: 9 },
  { minDegree: 244.276, maxDegree: 268.99, value: 8 },
  { minDegree: 269.99, maxDegree: 294.704, value: 7 },
  { minDegree: 295.704, maxDegree: 320.418, value: 6 },
  { minDegree: 321.418, maxDegree: 346.132, value: 5 },
  { minDegree: 347.132, maxDegree: 360, value: 4 },
];
const rotationValues15 = [
  { minDegree: 0, maxDegree: 18, value: 4 },
  { minDegree: 18.1, maxDegree: 42, value: 3 },
  { minDegree: 42.1, maxDegree: 66, value: 2 },
  { minDegree: 66.1, maxDegree: 90, value: 1 },
  { minDegree: 90.1, maxDegree: 114, value: 15 },
  { minDegree: 114.1, maxDegree: 138, value: 14 },
  { minDegree: 138.1, maxDegree: 162, value: 13 },
  { minDegree: 162.1, maxDegree: 186, value: 12 },
  { minDegree: 186.1, maxDegree: 210, value: 11 },
  { minDegree: 210.1, maxDegree: 234, value: 10 },
  { minDegree: 234.1, maxDegree: 258, value: 9 },
  { minDegree: 258.1, maxDegree: 282, value: 8 },
  { minDegree: 282.1, maxDegree: 306, value: 7 },
  { minDegree: 306.1, maxDegree: 330, value: 6 },
  { minDegree: 330.1, maxDegree: 354, value: 5 },
  { minDegree: 354.1, maxDegree: 360, value: 4 },
];
const rotationValues16 = [
  { minDegree: 0, maxDegree: 22.5, value: 4 },
  { minDegree: 22.6, maxDegree: 45, value: 3 },
  { minDegree: 45.1, maxDegree: 67.5, value: 2 },
  { minDegree: 67.6, maxDegree: 90, value: 1 },
  { minDegree: 90.1, maxDegree: 112.5, value: 16 },
  { minDegree: 112.6, maxDegree: 135, value: 15 },
  { minDegree: 135.1, maxDegree: 157.5, value: 14 },
  { minDegree: 157.6, maxDegree: 180, value: 13 },
  { minDegree: 180.1, maxDegree: 202.5, value: 12 },
  { minDegree: 202.6, maxDegree: 225, value: 11 },
  { minDegree: 225.1, maxDegree: 247.5, value: 10 },
  { minDegree: 247.6, maxDegree: 270, value: 9 },
  { minDegree: 270.1, maxDegree: 292.5, value: 8 },
  { minDegree: 292.6, maxDegree: 315, value: 7 },
  { minDegree: 315.1, maxDegree: 337.5, value: 6 },
  { minDegree: 337.6, maxDegree: 360, value: 5 },
];
const rotationValues17 = [
  { minDegree: 0, maxDegree: 5.32, value: 5 },
  { minDegree: 5.42, maxDegree: 26.49, value: 4 },
  { minDegree: 26.59, maxDegree: 47.66, value: 3 },
  { minDegree: 47.76, maxDegree: 68.83, value: 2 },
  { minDegree: 68.93, maxDegree: 90, value: 1 },
  { minDegree: 90.1, maxDegree: 111.17, value: 17 },
  { minDegree: 111.27, maxDegree: 132.34, value: 16 },
  { minDegree: 132.44, maxDegree: 153.51, value: 15 },
  { minDegree: 153.61, maxDegree: 174.68, value: 14 },
  { minDegree: 174.78, maxDegree: 195.85, value: 13 },
  { minDegree: 195.95, maxDegree: 217.02, value: 12 },
  { minDegree: 217.12, maxDegree: 238.19, value: 11 },
  { minDegree: 238.29, maxDegree: 259.36, value: 10 },
  { minDegree: 259.46, maxDegree: 280.53, value: 9 },
  { minDegree: 280.63, maxDegree: 301.7, value: 8 },
  { minDegree: 301.8, maxDegree: 322.87, value: 7 },
  { minDegree: 322.97, maxDegree: 344.04, value: 6 },
  { minDegree: 344.14, maxDegree: 360, value: 5 },
];
const rotationValues18 = [
  { minDegree: 0, maxDegree: 10, value: 5 },
  { minDegree: 10.1, maxDegree: 30, value: 4 },
  { minDegree: 30.1, maxDegree: 50, value: 3 },
  { minDegree: 50.1, maxDegree: 70, value: 2 },
  { minDegree: 70.1, maxDegree: 90, value: 1 },
  { minDegree: 90.1, maxDegree: 110, value: 18 },
  { minDegree: 110.1, maxDegree: 130, value: 17 },
  { minDegree: 130.1, maxDegree: 150, value: 16 },
  { minDegree: 150.1, maxDegree: 170, value: 15 },
  { minDegree: 170.1, maxDegree: 190, value: 14 },
  { minDegree: 190.1, maxDegree: 210, value: 13 },
  { minDegree: 210.1, maxDegree: 230, value: 12 },
  { minDegree: 230.1, maxDegree: 250, value: 11 },
  { minDegree: 250.1, maxDegree: 270, value: 10 },
  { minDegree: 270.1, maxDegree: 290, value: 9 },
  { minDegree: 290.1, maxDegree: 310, value: 8 },
  { minDegree: 310.1, maxDegree: 330, value: 7 },
  { minDegree: 330.1, maxDegree: 350, value: 6 },
  { minDegree: 350.1, maxDegree: 360, value: 5 },
];
const rotationValues19 = [
  { minDegree: 0, maxDegree: 14.24, value: 5 },
  { minDegree: 14.34, maxDegree: 33.18, value: 4 },
  { minDegree: 33.28, maxDegree: 52.12, value: 3 },
  { minDegree: 52.22, maxDegree: 71.06, value: 2 },
  { minDegree: 71.16, maxDegree: 90, value: 1 },
  { minDegree: 90.1, maxDegree: 108.94, value: 19 },
  { minDegree: 109.04, maxDegree: 127.88, value: 18 },
  { minDegree: 127.98, maxDegree: 146.82, value: 17 },
  { minDegree: 146.92, maxDegree: 165.76, value: 16 },
  { minDegree: 165.86, maxDegree: 184.7, value: 15 },
  { minDegree: 184.8, maxDegree: 203.64, value: 14 },
  { minDegree: 203.74, maxDegree: 222.58, value: 13 },
  { minDegree: 222.68, maxDegree: 241.52, value: 12 },
  { minDegree: 241.62, maxDegree: 260.46, value: 11 },
  { minDegree: 260.56, maxDegree: 279.4, value: 10 },
  { minDegree: 279.5, maxDegree: 298.34, value: 9 },
  { minDegree: 298.44, maxDegree: 317.28, value: 8 },
  { minDegree: 317.38, maxDegree: 336.22, value: 7 },
  { minDegree: 336.32, maxDegree: 355.16, value: 6 },
  { minDegree: 355.26, maxDegree: 360, value: 5 },
];
const rotationValues20 = [
  { minDegree: 0, maxDegree: 18, value: 5 },
  { minDegree: 18.1, maxDegree: 36, value: 4 },
  { minDegree: 36.1, maxDegree: 54, value: 3 },
  { minDegree: 54.1, maxDegree: 72, value: 2 },
  { minDegree: 72.1, maxDegree: 90, value: 1 },
  { minDegree: 90.1, maxDegree: 108, value: 20 },
  { minDegree: 108.1, maxDegree: 126, value: 19 },
  { minDegree: 126.1, maxDegree: 144, value: 18 },
  { minDegree: 144.1, maxDegree: 162, value: 17 },
  { minDegree: 162.1, maxDegree: 180, value: 16 },
  { minDegree: 180.1, maxDegree: 198, value: 15 },
  { minDegree: 198.1, maxDegree: 216, value: 14 },
  { minDegree: 216.1, maxDegree: 234, value: 13 },
  { minDegree: 234.1, maxDegree: 252, value: 12 },
  { minDegree: 252.1, maxDegree: 270, value: 11 },
  { minDegree: 270.1, maxDegree: 288, value: 10 },
  { minDegree: 288.1, maxDegree: 306, value: 9 },
  { minDegree: 306.1, maxDegree: 324, value: 8 },
  { minDegree: 324.1, maxDegree: 342, value: 7 },
  { minDegree: 342.1, maxDegree: 360, value: 6 },
];
const rotationValues21 = [
  { minDegree: 0, maxDegree: 4.3, value: 6 },
  { minDegree: 4.4, maxDegree: 21.44, value: 5 },
  { minDegree: 21.54, maxDegree: 38.58, value: 4 },
  { minDegree: 38.68, maxDegree: 55.72, value: 3 },
  { minDegree: 55.82, maxDegree: 72.86, value: 2 },
  { minDegree: 72.96, maxDegree: 90, value: 1 },
  { minDegree: 90.1, maxDegree: 107.14, value: 21 },
  { minDegree: 107.24, maxDegree: 124.28, value: 20 },
  { minDegree: 124.38, maxDegree: 141.42, value: 19 },
  { minDegree: 141.52, maxDegree: 158.56, value: 18 },
  { minDegree: 158.66, maxDegree: 175.7, value: 17 },
  { minDegree: 175.8, maxDegree: 192.84, value: 16 },
  { minDegree: 192.94, maxDegree: 209.98, value: 15 },
  { minDegree: 210.08, maxDegree: 227.12, value: 14 },
  { minDegree: 227.22, maxDegree: 244.26, value: 13 },
  { minDegree: 244.36, maxDegree: 261.4, value: 12 },
  { minDegree: 261.5, maxDegree: 278.54, value: 11 },
  { minDegree: 278.64, maxDegree: 295.68, value: 10 },
  { minDegree: 295.78, maxDegree: 312.82, value: 9 },
  { minDegree: 312.92, maxDegree: 329.96, value: 8 },
  { minDegree: 330.06, maxDegree: 347.1, value: 7 },
  { minDegree: 347.2, maxDegree: 360, value: 6 },
];
const rotationValues22 = [
  { minDegree: 0, maxDegree: 8.2, value: 6 },
  { minDegree: 8.3, maxDegree: 24.56, value: 5 },
  { minDegree: 24.66, maxDegree: 40.92, value: 4 },
  { minDegree: 41.02, maxDegree: 57.28, value: 3 },
  { minDegree: 57.38, maxDegree: 73.64, value: 2 },
  { minDegree: 73.74, maxDegree: 90, value: 1 },
  { minDegree: 90.1, maxDegree: 106.36, value: 22 },
  { minDegree: 106.46, maxDegree: 122.72, value: 21 },
  { minDegree: 122.82, maxDegree: 139.08, value: 20 },
  { minDegree: 139.18, maxDegree: 155.44, value: 19 },
  { minDegree: 155.54, maxDegree: 171.8, value: 18 },
  { minDegree: 171.9, maxDegree: 188.16, value: 17 },
  { minDegree: 188.26, maxDegree: 204.52, value: 16 },
  { minDegree: 204.62, maxDegree: 220.88, value: 15 },
  { minDegree: 220.98, maxDegree: 237.24, value: 14 },
  { minDegree: 237.34, maxDegree: 253.6, value: 13 },
  { minDegree: 253.7, maxDegree: 269.96, value: 12 },
  { minDegree: 270.06, maxDegree: 286.32, value: 11 },
  { minDegree: 286.42, maxDegree: 302.68, value: 10 },
  { minDegree: 302.78, maxDegree: 319.04, value: 9 },
  { minDegree: 319.14, maxDegree: 335.4, value: 8 },
  { minDegree: 335.5, maxDegree: 351.76, value: 7 },
  { minDegree: 351.86, maxDegree: 360, value: 6 },
];
//background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];

////spin wheel//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let num_stu;
num_stu = parseInt(window.localStorage.getItem("num_of_stu"));

////render chart //////////////////////////////////////////////////////////////////////////////////////////////////////////////
let myChart;
let label_var = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

function render_chart() {
  myChart = new Chart(wheel, {
    //Plugin for displaying text on pie chart
    plugins: [ChartDataLabels],
    //Chart Type Pie
    type: "pie",
    data: {
      //Labels(values which are to be displayed on chart)
      labels: label_var,
      //Settings for dataset/pie
      datasets: [
        {
          backgroundColor: pieColors,
          data: new Array(num_stu).fill(1),
        },
      ],
    },
    options: {
      //Responsive chart
      responsive: true,
      animation: { duration: 0 },
      plugins: {
        //hide tooltip and legend
        tooltip: false,
        legend: {
          display: false,
        },
        //display labels inside pie chart
        datalabels: {
          color: "#ffffff",
          formatter: (_, context) =>
            context.chart.data.labels[context.dataIndex],
          font: { size: 24 },
        },
      },
    },
  });
}
render_chart();
////render chart //////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rotation_value_selector;
if (num_stu == 2) {
  rotation_value_selector = rotationValues2;
} else if (num_stu == 3) {
  rotation_value_selector = rotationValues3;
} else if (num_stu == 4) {
  rotation_value_selector = rotationValues4;
} else if (num_stu == 5) {
  rotation_value_selector = rotationValues5;
} else if (num_stu == 6) {
  rotation_value_selector = rotationValues6;
} else if (num_stu == 7) {
  rotation_value_selector = rotationValues7;
} else if (num_stu == 8) {
  rotation_value_selector = rotationValues8;
} else if (num_stu == 9) {
  rotation_value_selector = rotationValues9;
} else if (num_stu == 10) {
  rotation_value_selector = rotationValues10;
} else if (num_stu == 11) {
  rotation_value_selector = rotationValues11;
} else if (num_stu == 12) {
  rotation_value_selector = rotationValues12;
} else if (num_stu == 13) {
  rotation_value_selector = rotationValues13;
} else if (num_stu == 14) {
  rotation_value_selector = rotationValues14;
} else if (num_stu == 15) {
  rotation_value_selector = rotationValues15;
} else if (num_stu == 16) {
  rotation_value_selector = rotationValues16;
} else if (num_stu == 17) {
  rotation_value_selector = rotationValues17;
} else if (num_stu == 18) {
  rotation_value_selector = rotationValues18;
} else if (num_stu == 19) {
  rotation_value_selector = rotationValues19;
} else if (num_stu == 20) {
  rotation_value_selector = rotationValues20;
} else if (num_stu == 21) {
  rotation_value_selector = rotationValues21;
} else if (num_stu == 22) {
  rotation_value_selector = rotationValues22;
} else {
  rotation_value_selector = rotationValues;
}
//display value based on the randomAngle

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * 360);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});

const valueGenerator = (angleValue) => {
  for (let i of rotation_value_selector) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Selected Student Number: ${
        label_var[i.value - 1]
      }</p>`;

      spinBtn.disabled = false;
      break;
    }
  }
};
