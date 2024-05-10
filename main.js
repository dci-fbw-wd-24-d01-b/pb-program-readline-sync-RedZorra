import readlineSync from "readline-sync";

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

const name = capitalizeFirstLetter(readlineSync.question("What is your Name? "));
const birthYear = readlineSync.question("In which year were you born? ");
const birthCity = capitalizeFirstLetter(readlineSync.question("In which city were you born? "));
const currentCity = capitalizeFirstLetter(readlineSync.question("In which city do you live now? "));
const currentYear = readlineSync.question("What is the current year? ");

const age = currentYear - birthYear;

console.log(`Hello, My name is  ${name}. I was born ${age} years ago in ${birthCity}. Now I live in ${currentCity} .!`);