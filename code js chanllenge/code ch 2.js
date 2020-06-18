var john = [89, 120, 103];
var mike = [116, 94, 123];
let sumJohn = 0;
let indexJohn = 0;
let indexMike = 0
let sumMike = 0;

john.forEach((e,i) => {
    sumJohn += e;
    indexJohn = i+1;
})
mike.forEach((e,i) => {
    sumMike += e;
    indexMike = i+1;
})

let aveJohn = parseFloat(sumJohn/indexJohn);
let aveMike = parseFloat(sumMike/indexMike);
console.log(aveJohn, aveMike)

// mike team is the winner!