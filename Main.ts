import * as fs from 'fs';
import path from 'path';
export interface PhoneNumberResult {
  country: string;
  identifier: string;
  isCorrectNumber?: boolean;
}

export function checkPhoneNumber(input: string): PhoneNumberResult | boolean {
  // Utilisez une expression régulière pour valider l'entrée
  if (!/^[0-9+]+$/.test(input)) {
    console.log('The input must contain only the sign "+" and numbers');
    return false;
  }

  input = input.replace(/\+/g, '');

  const filePath = path.join(__dirname, '../json/phone_id.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (let i = 1; i <= input.length; i++) {
    const identifier = input.slice(0, i);
    if (data[identifier]) {
      const countryInfo = data[identifier];
      const totalDigitsExpected = countryInfo.digits + identifier.length; // Ajoutez la longueur de l'indicatif
      const isCorrectNumber = input.length === totalDigitsExpected || (input.length === totalDigitsExpected + 1 && input[i].toLowerCase() === '0');
      
      return { country: countryInfo.country, identifier: identifier, isCorrectNumber: isCorrectNumber };
    }
  }

  return false; // Aucune correspondance trouvée
}
