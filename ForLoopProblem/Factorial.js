const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter any number : '));
factorial = 1;
for (i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log(`Factorial of ${number} is : ${factorial}`);