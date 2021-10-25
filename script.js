// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('you clicked the button')

  // 1. Prompt the user for the password criteria. 
  // Length 8 < 128; Lowercase, Uppercase, special characters
  // 2. Confirm input is correct
  // 3. Generate password


  
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
