let numbers = [2, 5, 12, 13, 15, 18, 22];
for (let num = 0; num < numbers.length; num++)
if(num % 2 === 0) {
    console.log(numbers[num]);
}
function isEven() {
    console.log(num + 'は偶数です');
}


class Car {
    constructor(gass, num,) {
        this.gass = gass;
        this.num = num;
}
getNumGas() {
        console.log('ガソリンは${this.gass}です。ナンバーは${this.num}です。');
    }
}
let kuruma = new Car(600, 1818);
kuruma.getNumGas();