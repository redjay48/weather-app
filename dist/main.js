/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const searchBar = document.querySelector(\"#search-bar\");\nconst searchBtn = document.getElementById(\"search-btn\");\n\n// searchBtn.addEventListener('click', function() {\n//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=95e569ea6908c8defcf7629bc3f9281d`, {mode: 'cors'})\n//     .then(function(response) {\n//         return response.json();\n//     })\n//     .then(function(response) {\n//         console.log(response);\n//     })\n// })\n\nasync function getInfo() {\n  const response = await fetch(\n    `http://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=95e569ea6908c8defcf7629bc3f9281d`,\n    { mode: \"cors\" }\n  );\n  const weatherData = await response.json();\n  console.log(weatherData);\n}\n\nsearchBtn.addEventListener(\"click\", getInfo);\n\nconst countryList = {\n  AF: \"Afghanistan\",\n  AL: \"Albania\",\n  DZ: \"Algeria\",\n  AS: \"American Samoa\",\n  AD: \"Andorra\",\n  AO: \"Angola\",\n  AI: \"Anguilla\",\n  AQ: \"Antarctica\",\n  AG: \"Antigua and Barbuda\",\n  AR: \"Argentina\",\n  AM: \"Armenia\",\n  AW: \"Aruba\",\n  AU: \"Australia\",\n  AT: \"Austria\",\n  AZ: \"Azerbaijan\",\n  BS: \"Bahamas (the)\",\n  BH: \"Bahrain\",\n  BD: \"Bangladesh\",\n  BB: \"Barbados\",\n  BY: \"Belarus\",\n  BE: \"Belgium\",\n  BZ: \"Belize\",\n  BJ: \"Benin\",\n  BM: \"Bermuda\",\n  BT: \"Bhutan\",\n  BO: \"Bolivia (Plurinational State of)\",\n  BQ: \"Bonaire, Sint Eustatius and Saba\",\n  BA: \"Bosnia and Herzegovina\",\n  BW: \"Botswana\",\n  BV: \"Bouvet Island\",\n  BR: \"Brazil\",\n  IO: \"British Indian Ocean Territory (the)\",\n  BN: \"Brunei Darussalam\",\n  BG: \"Bulgaria\",\n  BF: \"Burkina Faso\",\n  BI: \"Burundi\",\n  CV: \"Cabo Verde\",\n  KH: \"Cambodia\",\n  CM: \"Cameroon\",\n  CA: \"Canada\",\n  KY: \"Cayman Islands (the)\",\n  CF: \"Central African Republic (the)\",\n  TD: \"Chad\",\n  CL: \"Chile\",\n  CN: \"China\",\n  CX: \"Christmas Island\",\n  CC: \"Cocos (Keeling) Islands (the)\",\n  CO: \"Colombia\",\n  KM: \"Comoros (the)\",\n  CD: \"Congo (the Democratic Republic of the)\",\n  CG: \"Congo (the)\",\n  CK: \"Cook Islands (the)\",\n  CR: \"Costa Rica\",\n  HR: \"Croatia\",\n  CU: \"Cuba\",\n  CW: \"Curaçao\",\n  CY: \"Cyprus\",\n  CZ: \"Czechia\",\n  CI: \"Côte d'Ivoire\",\n  DK: \"Denmark\",\n  DJ: \"Djibouti\",\n  DM: \"Dominica\",\n  DO: \"Dominican Republic (the)\",\n  EC: \"Ecuador\",\n  EG: \"Egypt\",\n  SV: \"El Salvador\",\n  GQ: \"Equatorial Guinea\",\n  ER: \"Eritrea\",\n  EE: \"Estonia\",\n  SZ: \"Eswatini\",\n  ET: \"Ethiopia\",\n  FK: \"Falkland Islands (the) [Malvinas]\",\n  FO: \"Faroe Islands (the)\",\n  FJ: \"Fiji\",\n  FI: \"Finland\",\n  FR: \"France\",\n  GF: \"French Guiana\",\n  PF: \"French Polynesia\",\n  TF: \"French Southern Territories (the)\",\n  GA: \"Gabon\",\n  GM: \"Gambia (the)\",\n  GE: \"Georgia\",\n  DE: \"Germany\",\n  GH: \"Ghana\",\n  GI: \"Gibraltar\",\n  GR: \"Greece\",\n  GL: \"Greenland\",\n  GD: \"Grenada\",\n  GP: \"Guadeloupe\",\n  GU: \"Guam\",\n  GT: \"Guatemala\",\n  GG: \"Guernsey\",\n  GN: \"Guinea\",\n  GW: \"Guinea-Bissau\",\n  GY: \"Guyana\",\n  HT: \"Haiti\",\n  HM: \"Heard Island and McDonald Islands\",\n  VA: \"Holy See (the)\",\n  HN: \"Honduras\",\n  HK: \"Hong Kong\",\n  HU: \"Hungary\",\n  IS: \"Iceland\",\n  IN: \"India\",\n  ID: \"Indonesia\",\n  IR: \"Iran (Islamic Republic of)\",\n  IQ: \"Iraq\",\n  IE: \"Ireland\",\n  IM: \"Isle of Man\",\n  IL: \"Israel\",\n  IT: \"Italy\",\n  JM: \"Jamaica\",\n  JP: \"Japan\",\n  JE: \"Jersey\",\n  JO: \"Jordan\",\n  KZ: \"Kazakhstan\",\n  KE: \"Kenya\",\n  KI: \"Kiribati\",\n  KP: \"Korea (the Democratic People's Republic of)\",\n  KR: \"Korea (the Republic of)\",\n  KW: \"Kuwait\",\n  KG: \"Kyrgyzstan\",\n  LA: \"Lao People's Democratic Republic (the)\",\n  LV: \"Latvia\",\n  LB: \"Lebanon\",\n  LS: \"Lesotho\",\n  LR: \"Liberia\",\n  LY: \"Libya\",\n  LI: \"Liechtenstein\",\n  LT: \"Lithuania\",\n  LU: \"Luxembourg\",\n  MO: \"Macao\",\n  MG: \"Madagascar\",\n  MW: \"Malawi\",\n  MY: \"Malaysia\",\n  MV: \"Maldives\",\n  ML: \"Mali\",\n  MT: \"Malta\",\n  MH: \"Marshall Islands (the)\",\n  MQ: \"Martinique\",\n  MR: \"Mauritania\",\n  MU: \"Mauritius\",\n  YT: \"Mayotte\",\n  MX: \"Mexico\",\n  FM: \"Micronesia (Federated States of)\",\n  MD: \"Moldova (the Republic of)\",\n  MC: \"Monaco\",\n  MN: \"Mongolia\",\n  ME: \"Montenegro\",\n  MS: \"Montserrat\",\n  MA: \"Morocco\",\n  MZ: \"Mozambique\",\n  MM: \"Myanmar\",\n  NA: \"Namibia\",\n  NR: \"Nauru\",\n  NP: \"Nepal\",\n  NL: \"Netherlands (the)\",\n  NC: \"New Caledonia\",\n  NZ: \"New Zealand\",\n  NI: \"Nicaragua\",\n  NE: \"Niger (the)\",\n  NG: \"Nigeria\",\n  NU: \"Niue\",\n  NF: \"Norfolk Island\",\n  MP: \"Northern Mariana Islands (the)\",\n  NO: \"Norway\",\n  OM: \"Oman\",\n  PK: \"Pakistan\",\n  PW: \"Palau\",\n  PS: \"Palestine, State of\",\n  PA: \"Panama\",\n  PG: \"Papua New Guinea\",\n  PY: \"Paraguay\",\n  PE: \"Peru\",\n  PH: \"Philippines (the)\",\n  PN: \"Pitcairn\",\n  PL: \"Poland\",\n  PT: \"Portugal\",\n  PR: \"Puerto Rico\",\n  QA: \"Qatar\",\n  MK: \"Republic of North Macedonia\",\n  RO: \"Romania\",\n  RU: \"Russian Federation (the)\",\n  RW: \"Rwanda\",\n  RE: \"Réunion\",\n  BL: \"Saint Barthélemy\",\n  SH: \"Saint Helena, Ascension and Tristan da Cunha\",\n  KN: \"Saint Kitts and Nevis\",\n  LC: \"Saint Lucia\",\n  MF: \"Saint Martin (French part)\",\n  PM: \"Saint Pierre and Miquelon\",\n  VC: \"Saint Vincent and the Grenadines\",\n  WS: \"Samoa\",\n  SM: \"San Marino\",\n  ST: \"Sao Tome and Principe\",\n  SA: \"Saudi Arabia\",\n  SN: \"Senegal\",\n  RS: \"Serbia\",\n  SC: \"Seychelles\",\n  SL: \"Sierra Leone\",\n  SG: \"Singapore\",\n  SX: \"Sint Maarten (Dutch part)\",\n  SK: \"Slovakia\",\n  SI: \"Slovenia\",\n  SB: \"Solomon Islands\",\n  SO: \"Somalia\",\n  ZA: \"South Africa\",\n  GS: \"South Georgia and the South Sandwich Islands\",\n  SS: \"South Sudan\",\n  ES: \"Spain\",\n  LK: \"Sri Lanka\",\n  SD: \"Sudan (the)\",\n  SR: \"Suriname\",\n  SJ: \"Svalbard and Jan Mayen\",\n  SE: \"Sweden\",\n  CH: \"Switzerland\",\n  SY: \"Syrian Arab Republic\",\n  TW: \"Taiwan\",\n  TJ: \"Tajikistan\",\n  TZ: \"Tanzania, United Republic of\",\n  TH: \"Thailand\",\n  TL: \"Timor-Leste\",\n  TG: \"Togo\",\n  TK: \"Tokelau\",\n  TO: \"Tonga\",\n  TT: \"Trinidad and Tobago\",\n  TN: \"Tunisia\",\n  TR: \"Turkey\",\n  TM: \"Turkmenistan\",\n  TC: \"Turks and Caicos Islands (the)\",\n  TV: \"Tuvalu\",\n  UG: \"Uganda\",\n  UA: \"Ukraine\",\n  AE: \"United Arab Emirates (the)\",\n  GB: \"United Kingdom of Great Britain and Northern Ireland (the)\",\n  UM: \"United States Minor Outlying Islands (the)\",\n  US: \"United States of America (the)\",\n  UY: \"Uruguay\",\n  UZ: \"Uzbekistan\",\n  VU: \"Vanuatu\",\n  VE: \"Venezuela (Bolivarian Republic of)\",\n  VN: \"Viet Nam\",\n  VG: \"Virgin Islands (British)\",\n  VI: \"Virgin Islands (U.S.)\",\n  WF: \"Wallis and Futuna\",\n  EH: \"Western Sahara\",\n  YE: \"Yemen\",\n  ZM: \"Zambia\",\n  ZW: \"Zimbabwe\",\n  AX: \"Åland Islands\",\n};\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;