# phone-country-lookup

PhoneCountryLookup is a server-side tool that helps you detect the country of origin of a phone number and verify if it has the correct digit count.

## Installation

To install PhoneCountryLookup, use npm:

```bash
npm install phone-country-lookup
```
## Usage
```bash
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
```
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.