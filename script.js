///connect with google sheet ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = "111620250990197785541";
const API_KEY = "AIzaSyChPMfCOVsnJgmikJZg7E3A6FX77xxeo-E";

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC =
  "https://sheets.googleapis.com/$discovery/rest?version=v4";

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

let tokenClient;
let gapiInited = false;
let gisInited = false;

/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
  gapi.load("client", initializeGapiClient);
}
/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
function initializeGapiClient() {
  gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: "", // defined later
  });
  gisInited = true;
  maybeEnableButtons();
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    // document.getElementById('authorize_button').style.visibility = 'visible';
    console.log("gapi initiated");
  }
}
/**
 *  Sign in the user upon button click.
 */
function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    await listMajors();
  };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: "" });
  }
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken("");
  }
}

let god_data;
let academy_names = [];
let arr_academy_names;
async function listMajors(spreadsheet_Id, range_to_get) {
  let response;
  try {
    // Fetch first 10 files
    response = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheet_Id,
      range: range_to_get,
    });
    //console.log(response.result.values);
    god_data = response.result.values;
    // console.log(god_data);
  } catch (err) {
    //document.getElementById('content').innerText = err.message;
    console.log(err);
    return;
  }
  const range = response.result;

  if (!range || !range.values || range.values.length == 0) {
    //document.getElementById('content').innerText = 'No values found.';
    console.log("No values found.");
    return;
  }

  for (let i = 0; i < god_data.length; i++) {
    academy_names.push(god_data[i][0]);
    // console.log(i);
  }
  arr_academy_names = [...new Set(academy_names)];

  render_dropdown();
  
  // Flatten to string to display

  // // const output = range.values.reduce(
  // //     (str, row) => `${str}${row[0]}, ${row[1]}\n`,
  // //     'Name, Major:\n');
  // //document.getElementById("final-value").innerText = output;

}

function render_dropdown() {
  let x = document.getElementById("aa_dropdown");

  //console.log(set_academy_names);
  for (let i = 0; i < arr_academy_names.length; i++) {
    let option = document.createElement("option");

    option.text = arr_academy_names[i];
    x.add(option);
  }
}

function on_click_pass_check() {
  let input_pass = document.getElementById("password").value;
  let selected_academy = document.getElementById("aa_dropdown").value;
  if (input_pass == "1234" & selected_academy.length >2) {
    console.log(selected_academy);
    console.log("checked");
    window.location.href= "http://localhost:5500/home.html"
  }
}
function timer() {
  setTimeout(function () {
    listMajors(
      "1kN24uKeTLC0trCFIeHyugZZNxeKbRs0gBZ6_UrzpDM4",
      "Class Data!A2:C"
    );

  }, 10000);
}

timer();


///connect with google sheet ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////spin wheel/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];
//Size of each piece
const data = [1, 1, 1, 1, 1, 1];
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
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: [1, 2, 3, 4, 5, 6],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
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
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};
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
  let randomDegree = Math.floor(Math.random() * (360) );
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
////spin wheel//////////////////////////////////////////////////////////////////////////////////////////////////////////////









//update vaalue, get value/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  const val= [
//     ["Item", "Cost", "Stocked", "Ship Date"],
//     ["Wheel", "$20.50", "4", "3/1/2016"],
//     ["Door", "$15", "2", "3/15/2016"],
//     ["Engine", "$100", "1", "3/20/2016"],
//     ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
//   ];

//  function updateValues(spreadsheetId, valueInputOption, _values, callback) {
//     // let values = [
//     //   [
//     //     // Cell values ...
//     //   ],
//       // Additional rows ...
//     //];
//     values = _values;
//     const body = {
//       values: values,
//     };
//     try {
//       gapi.client.sheets.spreadsheets.values.update({
//         spreadsheetId: spreadsheetId,
//         range: 'Sheet1!A1:D5',
//         valueInputOption: valueInputOption,
//         resource: body,
//       }).then((response) => {
//         const result = response.result;
//         console.log(`${result.updatedCells} cells updated.`);
//         if (callback) callback(response);
//       });
//     } catch (err) {
//     //   document.getElementById('content').innerText = err.message;
//       console.log(err.message);
//       return;
//     }
//   }

//   updateValues(spreadsheet_Id,"USER_ENTERED",val);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
