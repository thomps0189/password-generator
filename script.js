// Assignment code here
// Arrays of all items
const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Prompt user to give ID Length
function generatePW(x,y) {
  let pwLength = parseInt(prompt('Length of the Password'))
}

if (isNaN(pwLength)) {
  alert('Password Length must be a number')
  return
}

if (pwLength < 8 || pwLength > 128) {
  alert('Password must be between 8 and 128 characters')
  return
}

//

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
