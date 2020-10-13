// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordLength() {
  var passLengthRaw = prompt(
    "How long should your password length be?",
    "Enter a number between 8 and 128"
  );
  var passLength = parseInt(passLengthRaw, 10);
  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  } else {
    return false;
  }
}

function generatePassword() {
  // Prompt for length of password of 8-128
  var passLength = false;
  while (passLength === false) {
    passLength = getPasswordLength();
  }

  // Choose lowercase, uppercase, numeric, and/or special characters .. at least one must be selected

  // Generate password

  return passLength;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
