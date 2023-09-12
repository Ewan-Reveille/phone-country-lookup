# phone-country-lookup-ts

phone-country-lookup-ts is a server-side tool that helps you detect the country of origin of a phone number and verify if it has the correct digit count. It is the TypeScript version of phone-country-lookup

## Installation

To install phone-country-lookup-ts, use npm:

```bash
npm install phone-country-lookup-ts
```
## Usage
```bash
import {checkPhoneNumber} from 'phone-country-lookup-ts';
const phoneNumber = "+998901237";
const result = checkPhoneNumber(phoneNumber);

if (result && typeof result === "object") {
  console.log(`The corresponding country of the telephone area code ${result.identifier} is: ${result.country}. The number of figures is ${result.isCorrectNumber}.`);
} else {
  console.log(`No country matches the telephone area code ${phoneNumber}`);
}
```
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
