/*Password generator*/
function passwordGenerator(length, includesLowerCase, includesUpperCase, includesNumbers, includesSymbol) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0987654321";
  const symbolChars = "!$#%~])&[?@{(_-";

  let allowedChars = "";
  let password = "";

  allowedChars += includesLowerCase ? lowerCaseChars : "";
  allowedChars += includesUpperCase ? upperCaseChars : "";
  allowedChars += includesNumbers ? numberChars : "";
  allowedChars += includesSymbol ? symbolChars : "";

  if (length <= 0) {
    return '(password must alteast be zero)';
  }

  if (allowedChars.length === 0) {
    return '(You must select one set of type)';
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];

  }

  return password;
}

const passwordLength = 30;
const includesLowerCase = true;
const includesUpperCase = true;
const includesNumbers = true;
const includesSymbol = true;

const password = passwordGenerator(passwordLength, includesLowerCase, includesUpperCase, includesNumbers, includesSymbol)

console.log(`Generated password: ${password}`)
