const prompt = require('prompt-sync')();
let choice = prompt("Press 1 for Feet to Inch\nPress 2 for Inch to Feet\nPress 3 for Feet to Meter\nPress 4 for Meter to Feet\n");
switch (choice) {
    case "1":
        let valueInFeets = prompt("Enter value in feets : ");
        let valueInInches = valueInFeets * 12;
        console.log("Value in Inches is : " + valueInInches);
        break;
    case "2":
        let value2 = prompt("Enter value in feets : ");
        value3 = value2 / 12;
        console.log("Value in Feets is : " + value3);
        break;
    case "3":
        let value1 = prompt("Enter value in feets : ");
        let valueinMeters = value1 * 0.3048;
        console.log("Value in Meters : " + valueinMeters);
        break;
    case "4":
        let value4 = prompt("Enter value in meters : ");
        let value = value4 * 3.280;
        console.log("Value in Feets : " + value);
        break;
    default:
        console.log("Invalid Input !!!");
        break;
}   