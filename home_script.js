/////spin wheel/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 360, value: 1 },
];

const rotationValues6 = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
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
//Size of each piece
const data = [1, 1,1,1,1,1];
//background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];
//Create chart


////spin wheel//////////////////////////////////////////////////////////////////////////////////////////////////////////////

////fetching academy name and retreiving teacher names,classes and other related data //////////////////////////////////////////////////////////////////////////////////////////////////////////////

let aca_name;
aca_name = window.localStorage.getItem("sel_aca");

let god_data;
god_data = JSON.parse(window.localStorage.getItem("data"));

let table_data = [];
for (let i = 0; i < god_data.length; i++) {
  if (god_data[i][0] == aca_name) {
    table_data.push(god_data[i]);
  }
}
//    console.log(table_data);

////fetching academy name and retreiving teacher names,classes and other related data //////////////////////////////////////////////////////////////////////////////////////////////////////////////

////render table using table_data //////////////////////////////////////////////////////////////////////////////////////////////////////////////

function render_table() {
  var x = document.getElementById("table_id");
  x.createCaption().innerText = aca_name;

  var header = x.createTHead();
  var row = header.insertRow(0);

  var cellA = row.insertCell(0);
  var cellB = row.insertCell(1);
  cellA.innerHTML = "<b>Teacher Name<b>";
  cellB.innerHTML = "<b>Unique Code<b>";
  for (let i = 0; i < table_data.length; i++) {
    var row = x.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = table_data[i][1];
    cell2.innerHTML = table_data[i][2];
  }
}
render_table();
////render table using table_data //////////////////////////////////////////////////////////////////////////////////////////////////////////////

////render chart //////////////////////////////////////////////////////////////////////////////////////////////////////////////
let myChart;
let label_var=[];
for (let i=0;i<table_data.length;i++){
  label_var.push(table_data[i][1]);
}
function render_chart(){
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
          data: new Array(table_data.length).fill(1),
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
          formatter: (_, context) => context.chart.data.labels[context.dataIndex],
          font: { size: 24 },
        },
      },
    },
  });
}
render_chart();
////render chart //////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rotation_value_selector;
if (table_data.length==2)
{
  rotation_value_selector= rotationValues2
}
else if (table_data.length==3){
  rotation_value_selector=rotationValues3
}
else if (table_data.length==4){
  rotation_value_selector=rotationValues4
}
else{
  rotation_value_selector=rotationValues
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
      finalValue.innerHTML = `<p>Winner: ${table_data[i.value-1][1]}</p>`;
      console.log(table_data[i.value-1]);
      //appendValues("1zNxmasKf1U220lQqGGEd2BKkwo3pY55OH66pWkmF98I","Sheet1!A1","RAW","dadasaf");
       spinBtn.disabled = false;
      break;
    }
  }
};
///post on google sheets////////////////////////////////////////////////////////////////////////////////////////////////////

// const CLIENT_ID = "111620250990197785541";
// const API_KEY = "AIzaSyChPMfCOVsnJgmikJZg7E3A6FX77xxeo-E";


// // Discovery doc URL for APIs used by the quickstart
// const DISCOVERY_DOC =
//   "https://sheets.googleapis.com/$discovery/rest?version=v4";

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

// let tokenClient;
// let gapiInited = false;
// let gisInited = false;

// /**
//  * Callback after api.js is loaded.
//  */
// function gapiLoaded() {
//   gapi.load("client", initializeGapiClient);
// }
// /**
//  * Callback after the API client is loaded. Loads the
//  * discovery doc to initialize the API.
//  */
// function initializeGapiClient() {
//   gapi.client.init({
//     apiKey: API_KEY,
//     //  clientId: CLIENT_ID,
//     // scope:  SCOPES,
//     discoveryDocs: [DISCOVERY_DOC],
//   });
//   gapiInited = true;
//   maybeEnableButtons();
// }

// /**
//  * Callback after Google Identity Services are loaded.
//  */
// function gisLoaded() {
//   tokenClient = google.accounts.oauth2.initTokenClient({
//     client_id: CLIENT_ID,
//     scope: SCOPES,
//     callback: "", // defined later
//   });
//   gisInited = true;
//   maybeEnableButtons();
// }

// /**
//  * Enables user interaction after all libraries are loaded.
//  */
// function maybeEnableButtons() {
//   if (gapiInited && gisInited) {
//     // document.getElementById('authorize_button').style.visibility = 'visible';
//     console.log("gapi initiated");    
//   }
// }
// /**
//  *  Sign in the user upon button click.
//  */
// function handleAuthClick() {
//   tokenClient.callback = async (resp) => {
//     if (resp.error !== undefined) {
//       throw resp;
//     }
//   };

//   if (gapi.client.getToken() === null) {
//     // Prompt the user to select a Google Account and ask for consent to share their data
//     // when establishing a new session.
//     tokenClient.requestAccessToken({ prompt: "consent" });
//   } else {
//     // Skip display of account chooser and consent dialog for an existing session.
//     tokenClient.requestAccessToken({ prompt: "" });
//   }
// }

// /**
//  *  Sign out the user upon button click.
//  */
// function handleSignoutClick() {
//   const token = gapi.client.getToken();
//   if (token !== null) {
//     google.accounts.oauth2.revoke(token.access_token);
//     gapi.client.setToken("");
//   }
// }


// async function appendValues(spreadsheetId, range, valueInputOption, _values, callback) {

//   values = _values;
//   const body = {
//     values: values,
//   };
//   try {
//     await gapi.client.sheets.spreadsheets.values.append({
//       spreadsheetId: spreadsheetId,
//       range: range,
//       valueInputOption: valueInputOption,
//       resource: body,
//     }).then((response) => {
//       const result = response.result;
//       console.log(`${result.updates.updatedCells} cells appended.`);
//       if (callback) callback(response);
//     });
//   } catch (err) {
//     //document.getElementById('content').innerText = err.message;
//     console.log(err);
//     return;
//   }
// }


