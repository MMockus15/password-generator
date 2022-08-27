// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j" "k", "l", "m", "n", "o", "p", "q", "r", "s", "t,", "u", "v", "w", "x", "y", "z"]
var specChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*" "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\", "/", ":", ":", """, "'", "<", ">", ",", ".", "?"]
var numbers = [1 ,2 , 3, 4, 5, 6, 7, 8, 9, 0]


// upperCase = upperCase.concat(upperCase2);
console.log(upperCase);

// upperCase = upperCase.push("F", "G");
console.log(upperCase.length);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // write code to generate the users password
  // prompt the user - length (8-128)
  // confirm use of - uppercase, lowercase, numbers, specChars
  // Generate a user password that meets the selected criteria
  // make sure that all of the users character selections are included in the output
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
