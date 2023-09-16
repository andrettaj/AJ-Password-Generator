// Assignment code here

function generatePassword() {
  var passwordlength = parseInt(prompt("Enter Password Length"))
  console.log(passwordlength)
  if (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
    return "Enter valid password length. "
  }
  var uppercase = confirm("Do you want uppercase letters?")
  var lowercase = confirm("Do you want lowercase letters?")
  var number = confirm("Do you want a number?")
  var specialcharacter = confirm("Do you want special Charactor?")
  console.log(passwordlength)
  var acceptableChars = []
  if (uppercase) {
    acceptableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (lowercase) {
    acceptableChars += "abcdefghijklmnopqrstuvwxyz"
  }
  if (number) {
    acceptableChars += "0123456789"
  }
  if (specialcharacter) {
    acceptableChars += "~!@#$%^&*()+_-="
  }
  console.log (acceptableChars)
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



