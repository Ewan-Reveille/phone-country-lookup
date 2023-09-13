const fs = require("fs");
const path = require("path");
function checkPhoneNumber(input) {
    if (!/^[0-9+]+$/.test(input)) {
        console.log('The input must contain only the plus sign "+" and numbers.');
        return false;
    }
    input = input.replace(/\+/g, '');
    const filePath = path.join(__dirname, './json/phone_id.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    for (let i = 1; i <= input.length; i++) {
        const identifier = input.slice(0, i);
        if (data[identifier]) {
            const countryInfo = data[identifier];
            const totalDigitsExpected = countryInfo.digits + identifier.length;
            const isCorrectNumber = input.length === totalDigitsExpected || (input.length === totalDigitsExpected + 1 && input[i].toLowerCase() === '0');
            return { country: countryInfo.country, identifier: identifier, isCorrectNumber: isCorrectNumber };
        }
    }
   return false;
}
module.exports = { checkPhoneNumber };
