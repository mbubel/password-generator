// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";

const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbersCharacters = "0123456789";

const specialCharacters = "!@#$%^&*()-=_+[]{}|;':,./<>?`~";

// sourced from: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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

function shouldUseCharacterClass(characterClass) {
  while (true) {
    var res = prompt(
      "Do you want your password to include " + characterClass + "? (yes/no)"
    );
    if ("yes" === res) {
      return true;
    } else if ("no" === res) {
      return false;
    } else {
      alert("Please answer 'yes' or 'no' ");
    }
  }
}
function getCharacterClasses() {
  while (true) {
    var shouldUseLowerCase = shouldUseCharacterClass("lowercase characters");
    var shouldUseUpperCase = shouldUseCharacterClass("uppercase characters");
    var shouldUseNumeric = shouldUseCharacterClass("numeric characters");
    var shouldUseSpecial = shouldUseCharacterClass("special characters");
    if (
      shouldUseLowerCase ||
      shouldUseUpperCase ||
      shouldUseNumeric ||
      shouldUseSpecial
    ) {
      return {
        shouldUseLowerCase,
        shouldUseUpperCase,
        shouldUseNumeric,
        shouldUseSpecial,
      };
    } else {
      alert("Please choose at least ONE character class");
    }
  }
}

function generatePassword() {
  // Prompt for length of password of 8-128
  var passLength = false;
  while (passLength === false) {
    passLength = getPasswordLength();
  }

  // Choose lowercase, uppercase, numeric, and/or special characters .. at least one must be selected

  const usedCharacterClasses = getCharacterClasses();
  var desiredCharacters = "";
  if (usedCharacterClasses.shouldUseLowerCase) {
    desiredCharacters += lowercaseCharacters;
  }
  if (usedCharacterClasses.shouldUseUpperCase) {
    desiredCharacters += uppercaseCharacters;
  }
  if (usedCharacterClasses.shouldUseNumeric) {
    desiredCharacters += numbersCharacters;
  }
  if (usedCharacterClasses.shouldUseSpecial) {
    desiredCharacters += specialCharacters;
  }

  // Generate password
  var generatedPassword = "";

  for (let i = 0; i < passLength; i++) {
    generatedPassword +=
      desiredCharacters[getRandomInt(desiredCharacters.length)];
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);