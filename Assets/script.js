// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


upperCase = upperCase.concat(upperCase2);
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
