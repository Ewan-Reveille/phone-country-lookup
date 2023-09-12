const { checkPhoneNumber } = require('./Main');

// Check a phone number
const phoneNumber = "+11234567890";
const result = checkPhoneNumber(phoneNumber);

if (result) {
  console.log(`Country: ${result.country}`);
  console.log(`Identifier: ${result.identifier}`);
  console.log(`Is Correct Number: ${result.isCorrectNumber}`);
} else {
  console.log("No match found.");
}
