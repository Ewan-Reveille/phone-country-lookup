import {checkPhoneNumber} from './Main';
const phoneNumber = "+998901237";
const result = checkPhoneNumber(phoneNumber);

if (result && typeof result === "object") {
  console.log(`The corresponding country of the telephone area code ${result.identifier} is: ${result.country}. The number of figures is ${result.isCorrectNumber}.`);
} else {
  console.log(`No country matches the telephone area code ${phoneNumber}`);
}