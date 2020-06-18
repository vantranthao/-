// let bill = prompt('Your bill: ');
let payMoney = 1;

function pay(bill) {
    if (bill < 50) {
        payMoney = bill*0.2;
    } else if (bill > 50 && bill <200) {
        payMoney = bill*0.15;
    } else if (bill > 200) {
        payMoney = bill*0.1;
    }
    return payMoney;
}

var tipMoney = [124, 58,300];
var result = [pay(124), pay(58), pay(300)];
console.log(result);