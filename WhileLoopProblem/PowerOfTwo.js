const prompt = require('prompt-sync')();
var number = prompt("Enter the number : ");
let i = 0;
let power = 0;
while (i <= number) {
    power = Math.pow(2, i);
    console.log(power);
    if (power == 256) {
        break;
    }
    i++;
}