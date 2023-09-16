// Assignment code here

function generatePassword () {
var passwordlength = parseInt(prompt("Enter Password Length"))
console.log (passwordlength)
if (passwordlength <8 || passwordlength>128 || isNaN(passwordlength)){
  return "Enter valid password length. "
} 
}
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



