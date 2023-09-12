"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPhoneNumber = void 0;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
function checkPhoneNumber(input) {
    // Utilisez une expression régulière pour valider l'entrée
    if (!/^[0-9+]+$/.test(input)) {
        console.log('The input must contain only the sign "+" and numbers');
        return false;
    }
    input = input.replace(/\+/g, '');
    const filePath = path_1.default.join(__dirname, './json/phone_id.json');
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
    return false;
}
exports.checkPhoneNumber = checkPhoneNumber;