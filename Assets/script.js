var upperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t,",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numbersChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompt the user - length (8-128)
  // parseInt = must be string
  var finalPassword = [];
  var passwordLength = parseInt(
    prompt(
      "How many characters would you like your password to be? Must choose between 8-128 characters."
    )
  );
  if (isNaN(passwordLength)) {
    alert("Must choose a valid number.");
    return;
  }
  if (passwordLength < 8) {
    alert("Must choose number greater than 7.");
    return;
  }
  if (passwordLength > 128) {
    alert("Must choose number less than 129.");
    return;
  }

  // confirm use of - uppercase, lowercase, numbers, specChars
  // confirmation window asking what types of characters the user would like to use for their generated password.
  var upperCase = confirm(
    "Would you like the password to use uppercase letters?"
  );
  var lowerCase = confirm(
    "Would you like the password to use lowercase letters?"
  );
  var specChars = confirm(
    "Would you like the password to use special charaters?"
  );
  var numbers = confirm("Would you like the password to use numbers?");
  if (!upperCase && !lowerCase && !specChars && !numbers) {
    alert("You must choose at least one charater.");
    return;
  }

  var allPossibleChars = [];
  if (upperCase) {
    allPossibleChars = allPossibleChars.concat(upperCaseChars);
  }
  if (lowerCase) {
    allPossibleChars = allPossibleChars.concat(lowerCaseChars);
  }
  if (specChars) {
    allPossibleChars = allPossibleChars.concat(specialChars);
  }
  if (numbers) {
    allPossibleChars = allPossibleChars.concat(numbersChars);
  }
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allPossibleChars.length);
    finalPassword.push(allPossibleChars[randomIndex]);
  }
  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
