import format from "date-fns/format";
const searchBar = document.querySelector("#search-bar");
const searchBtn = document.getElementById("search-btn");
const celsius = document.querySelector(".celsius");
const tempBtns = document.getElementsByClassName("temp-btn");
const tempMain = document.querySelector(".temp");
const tempMax = document.querySelector(".max");
const tempMin = document.querySelector(".min");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const lat = document.querySelector(".lat");
const lon = document.querySelector(".lon");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const timeZone = document.querySelector(".timezone");
const weatherIcon = document.querySelector("#weather-icon");
const weatherType = document.querySelector(".weather-type");
const weatherDescr = document.querySelector(".descr");
const humid = document.querySelector(".humid");
const cloud = document.querySelector(".cloud");
const feelsLike = document.querySelector(".feels-like");
const windSpeed = document.querySelector(".wind-speed");

//Geolocation function

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  getLocationInfo(crd.latitude, crd.longitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

//Populate by location

async function getLocationInfo(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95e569ea6908c8defcf7629bc3f9281d`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  funMain(weatherData);
}

//Populate by Searching

async function getInfo() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=95e569ea6908c8defcf7629bc3f9281d`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  funMain(weatherData);
  document.querySelector(".fahrenheit").disabled = false;
  document.querySelector(".fahrenheit").classList.remove("select");
}

function funMain(weatherData) {
  populate(weatherData);
  tempFun(weatherData);
  bgImg(weatherData);
  for (const btn of tempBtns) {
    btn.addEventListener("click", (e) => {
      tempActive(e);
      tempChange(e, weatherData);
      btnDisable(e);
    });
  }
}

function populate(data) {
  city.textContent = data.name;
  country.textContent = countryName(data);
  lat.textContent = `lat: ${data.coord.lat}`;
  lon.textContent = `lon: ${data.coord.lon}`;
  timeZone.textContent = `Timezone: GMT ${data.timezone / 3600}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  weatherType.textContent = data.weather[0].main;
  weatherDescr.textContent = data.weather[0].description;
  humid.textContent = "Humidity: " + data.main.humidity + "%";
  cloud.textContent = "Cloudiness: " + data.clouds.all + "%";
  windSpeed.textContent =
    "Wind Speed: " +
    (data.wind.speed * 3.6).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0] +
    "kmph";
  day.textContent = format(new Date(), "eeee");
  date.textContent = format(new Date(), "dd MMM yyyy");
  time.textContent = format(new Date(), "hh':'mm aa");
}

function bgImg(data) {
  const url = `img/${data.weather[0].main.toLowerCase()}.jpg`;
  document.getElementById("data").style.background = `url('${url}')`;
}

function tempFun(data) {
  defaultTemp(data);
  celsius.disabled = true;
}

function defaultTemp(data) {
  tempMain.textContent =
    (Number(data.main.temp) - 273.15)
      .toString()
      .match(/^-?\d+(?:\.\d{0,2})?/)[0] + "??";
  tempMax.textContent =
    (Number(data.main.temp_max) - 273.15)
      .toString()
      .match(/^-?\d+(?:\.\d{0,2})?/)[0] + "??C";
  tempMin.textContent =
    (Number(data.main.temp_min) - 273.15)
      .toString()
      .match(/^-?\d+(?:\.\d{0,2})?/)[0] + "??C";
  feelsLike.textContent =
    "Feels Like: " +
    (Number(data.main.feels_like) - 273.15)
      .toString()
      .match(/^-?\d+(?:\.\d{0,2})?/)[0] +
    "??C";
  windSpeed.textContent =
    "Wind Speed: " +
    (data.wind.speed * 3.6).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0] +
    "kmph";
}

function countryName(data) {
  for (const country in countryList) {
    if (data.sys.country === country) {
      return countryList[country];
    }
  }
}

searchBtn.addEventListener("click", getInfo);

function tempChange(e, data) {
  if (Array.from(tempBtns).indexOf(e.target) === 0) {
    defaultTemp(data);
  } else if (Array.from(tempBtns).indexOf(e.target) === 1) {
    tempMain.textContent =
      (((Number(data.main.temp) - 273.15) * 9) / 5 + 32)
        .toString()
        .match(/^-?\d+(?:\.\d{0,2})?/)[0] + "??";
    tempMin.textContent =
      (((Number(data.main.temp_max) - 273.15) * 9) / 5 + 32)
        .toString()
        .match(/^-?\d+(?:\.\d{0,2})?/)[0] + "??F";
    tempMax.textContent =
      (((Number(data.main.temp_min) - 273.15) * 9) / 5 + 32)
        .toString()
        .match(/^-?\d+(?:\.\d{0,2})?/)[0] + "??F";
    feelsLike.textContent =
      "Feels Like: " +
      (((Number(data.main.feels_like) - 273.15) * 9) / 5 + 32)
        .toString()
        .match(/^-?\d+(?:\.\d{0,2})?/)[0] +
      "??F";
    windSpeed.textContent =
      "Wind Speed: " +
      (data.wind.speed * 2.237).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0] +
      "mph";
  }
}

function tempActive(e) {
  e.target.classList.add("select");
  if (Array.from(tempBtns).indexOf(e.target) === 0) {
    Array.from(tempBtns)[1].classList.remove("select");
  } else {
    Array.from(tempBtns)[0].classList.remove("select");
  }
}

function btnDisable(e) {
  e.target.disabled = true;
  if (Array.from(tempBtns).indexOf(e.target) === 0) {
    Array.from(tempBtns)[1].disabled = false;
  } else {
    Array.from(tempBtns)[0].disabled = false;
  }
}

const countryList = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia (Plurinational State of)",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CD: "Congo (the Democratic Republic of the)",
  CG: "Congo",
  CK: "Cook Islands",
  CR: "Costa Rica",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Cura??ao",
  CY: "Cyprus",
  CZ: "Czechia",
  CI: "C??te d'Ivoire",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FK: "Falkland Islands [Malvinas]",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran (Islamic Republic of)",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea (the Democratic People's Republic of)",
  KR: "Korea (the Republic of)",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia (Federated States of)",
  MD: "Moldova (the Republic of)",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine, State of",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  MK: "Republic of North Macedonia",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  RE: "R??union",
  BL: "Saint Barth??lemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin (French part)",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten (Dutch part)",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania, United Republic of",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom of Great Britain and Northern Ireland",
  UM: "United States Minor Outlying Islands",
  US: "United States of America",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela (Bolivarian Republic of)",
  VN: "Viet Nam",
  VG: "Virgin Islands (British)",
  VI: "Virgin Islands (U.S.)",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AX: "??land Islands",
};
