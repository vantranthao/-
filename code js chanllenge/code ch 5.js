const john = {
    fullname: 'JOHN',
    money: [124, 48, 268, 180, 200],
    calc: function tipCalc() {
        let percent;
        let result = [];
        let paidMoney;
        
        for (i = 0; i < this.money.length; i++) {
            if (this.money[i] < 50) {
                percent = 0.2;
            } else if (this.money[i] > 50 && money[i] < 200) {
                percent = 0.15;
            } else if (this.money[i] > 200) {
                percent = 0.1;
            }
        }
        this.paidMoney = money[i] * percent;
        this.result[i] = money[i] + money[i]*percent;
    }
}