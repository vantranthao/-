let john = {
    fullname: 'JOHN',
    age: 21,
    mass: 65,
    height: 1.70,
    calBmi: function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
}

let mark = {
    fullname: 'MARK',
    age: 23,
    mass: 80,
    height: 1.65,
    calBmi: function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
}

if (john.calBmi() > mark.calBmi()) {
    console.log(`${john.fullname} is the higher`);
} else {
    console.log(`${mark.fullname} is the higher : ${mark.calBmi()}`);
}