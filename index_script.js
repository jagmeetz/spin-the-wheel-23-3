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
    // let godi;
    // godi=JSON.parse (localStorage.getItem('data'));
    // console.log(godi);
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
    window.localStorage.setItem('data' , JSON.stringify(god_data) );
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
    window.localStorage.setItem('sel_aca' , selected_academy );
    window.location.href= "http://127.0.0.1:5500/home.html"

    // console.log(selected_academy);
    // console.log("checked");

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
