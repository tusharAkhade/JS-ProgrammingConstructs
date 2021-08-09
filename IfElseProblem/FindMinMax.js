const arrayOfRandomNumbers = [];
for (i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 899 + 100);
    arrayOfRandomNumbers[i] = randomNumber;
}
console.log("Five Randome Numbers are : \n" + arrayOfRandomNumbers);
let minimum = arrayOfRandomNumbers[0];
let maximum = arrayOfRandomNumbers[0];
for (i = 0; i < arrayOfRandomNumbers.length; i++) {
    if (maximum < arrayOfRandomNumbers[i]) {
        maximum = arrayOfRandomNumbers[i];
    }
    if (minimum > arrayOfRandomNumbers[i]) {
        minimum = arrayOfRandomNumbers[i];
    }
}
console.log("Minimum Value is : " + minimum);
console.log("Maximum Value is : " + maximum);