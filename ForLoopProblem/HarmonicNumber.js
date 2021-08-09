const prompt = require('prompt-sync')();
var number = prompt("Enter the Nth Harmonic Number : ");
let harmonic = 1.00;
for (i = 2; i <= number; i++) {
    harmonic += parseFloat(1) / i;
}
console.log(harmonic);