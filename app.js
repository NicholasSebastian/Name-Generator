const minSyllables_input = document.getElementById("min");
const maxSyllables_input = document.getElementById("max");

const table_header = document.getElementById("table-head");
const table_content = document.getElementById("table-content");
const output_template = document.querySelector("template");

var minSyllables;
var maxSyllables;

function displayNames() {
  // Use the user input values.
  minSyllables = parseInt(minSyllables_input.value);
  maxSyllables = parseInt(maxSyllables_input.value);

  // Set the header to be visible.
  table_header.style.visibility = "visible";

  // Clear the table contents.
  while (table_content.firstChild) {
    table_content.removeChild(table_content.lastChild);
  }

  // Add the table contents.
  for (let i = 0; i < 8; i++) {
    let output = output_template.content.cloneNode(true);
    let output_spans = output.querySelectorAll("span");

    let name = generateName();
    output_spans[0].textContent = name[0];
    output_spans[1].textContent = name[1];

    table_content.appendChild(output);
  }
}

function generateName() {
  let letterName = "";
  let kanaName = "";

  // Generate a random number between min to max.
  let numberOfSyllables = Math.floor(
    Math.random() * (maxSyllables - minSyllables + 1) + minSyllables
  );

  for (let i = 0; i < numberOfSyllables; i++) {
    // Generate a random number between 0 to 45.
    let randomIndex = Math.floor(Math.random() * 46);

    // Select a random character.
    let letterChar = Object.keys(kanaDictionary)[randomIndex];
    let kanaChar = Object.values(kanaDictionary)[randomIndex];

    // Append the character onto the string.
    letterName += letterChar;
    kanaName += kanaChar;
  }

  // Format the lettername to use proper casing.
  letterName = letterName.charAt(0) + letterName.substring(1).toLowerCase();

  return [letterName, kanaName];
}

const kanaDictionary = {
  A: "ア",
  I: "イ",
  U: "ウ",
  E: "エ",
  O: "オ",
  KA: "カ",
  KI: "キ",
  KU: "ク",
  KE: "ケ",
  KO: "コ",
  SA: "サ",
  SHI: "シ",
  SU: "ス",
  SE: "セ",
  SO: "ソ",
  TA: "タ",
  CHI: "チ",
  TSU: "ツ",
  TE: "テ",
  TO: "ト",
  NA: "ナ",
  NI: "ニ",
  NU: "ヌ",
  NE: "ネ",
  NO: "ノ",
  HA: "ハ",
  HI: "ヒ",
  FU: "フ",
  HE: "ヘ",
  HO: "ホ",
  MA: "マ",
  MI: "ミ",
  MU: "ム",
  ME: "メ",
  MO: "モ",
  YA: "ヤ",
  YU: "ユ",
  YO: "ヨ",
  RA: "ラ",
  RI: "リ",
  RU: "ル",
  RE: "レ",
  RO: "ロ",
  WA: "ワ",
  WO: "ヲ",
  N: "ン",
};
