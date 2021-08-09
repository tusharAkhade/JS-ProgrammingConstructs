const prompt = require('prompt-sync')();
var number = prompt("Enter the Number : ");
var count = 0;
if (number <= 1) {
    console.log(number + " is not prime number");
} else {
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            count++;
        }
    }
    if(count == 0) {
        console.log(number + " is prime number");
    } else {
        console.log(number + " is not prime ");
    }
}