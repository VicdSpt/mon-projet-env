require('dotenv').config();

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

console.log(`I am ${name}, wilder in the city of ${city}, and I love ${language} very much !`);
