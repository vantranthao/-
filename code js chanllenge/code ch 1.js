var massMark = 75;
var heightMark = 1.75;

var massJohn = 85;
var heightJohn = 1.65;

var BMIMark = massMark / (heightMark*heightMark);
var BMIJohn = massJohn / (heightJohn*heightJohn);

var isHigher = BMIMark > BMIJohn;
console.log(isHigher)

console.log(`Is BMI of Mark higher than BMI of John: ${isHigher}`);