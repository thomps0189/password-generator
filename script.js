// Assignment code here
const lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z']

const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const specialCharactersArray = ["!", "#", "$", "%", "^", "&", "*", "+","~"]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let pwLength = parseInt(prompt('Length of Password'))

  // 1. Prompt the user for the password criteria. 
  // Length 8 < 128; Lowercase, Uppercase, special characters
  // var pwLength = prompt('What length would you like your password to be?')

  if (isNaN(pwLength)) {
    alert('Password length must be a number between 8 and 128.')
    return
  }

  if (pwLength < 8 || pwLength > 128) {
    alert('Password must be between 8 and 128')
    return 
  }

  var lowerCase = window.confirm('Would you like to use lowercase letters?')
  var upperCase = window.confirm('Would you like uppercase letters?')

  var specialCharacters = window.confirm('Would you like to use special characters?')

  let possibleCharacters = []

  if (lowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCaseArray)
  }

  if (upperCase) {
    possibleCharacters = possibleCharacters.concat(upperCaseArray)
  }

  if (specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharactersArray)
  }
  // 2. Confirm input is correct

  
  // 3. Generate password
for (let )


  // 4. Display password in box. 
  return "Generated password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
