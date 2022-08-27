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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var passwordLength = prompt("How many characters would you like your password to be? Must choose between 8-128 characters.");
var password ="";
for (var i = 0; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t,", "u", "v", "w", "x", "y", "z"];
var specChars = ['@',
 '%',
 '+',
 '\\',
 '/',
 "'",
 '!',
 '#',
 '$',
 '^',
 '?',
 ':',
 ',',
 ')',
 '(',
 '}',
 '{',
 ']',
 '[',
 '~',
 '-',
 '_',
 '.',
];
var numbers = [1 ,2 , 3, 4, 5, 6, 7, 8, 9, 0];


// write code to generate the users password

function generatePassword() {

  if(confirm("Would you like the password to use lowercase letters?")){
    options.lowerCase = true};
  }
  {
  if(confirm("Would you like the password to use uppercase letters?")){
    options.upperCase = true};
  }
  
  if(confirm("Would you like the password to use special characters?")){
    options.specChars = true};
  {
  }
  if(confirm("Would you like the password to use numbers?")){
    options.numbers = true};
  {
  }

  // prompt the user - length (8-128)
  if(Options.length < 8 || Options.length > 128){

  }
  // confirm use of - uppercase, lowercase, numbers, specChars
  // Generate a user password that meets the selected criteria
  // make sure that all of the users character selections are included in the output

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
