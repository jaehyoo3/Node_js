//프로토타입 = 클래스
// var Human = function (type) {
//     this.type = type || 'human';
// };
//
// Human.isHuman = function(human) {
//     return human instanceof Human;
// }
// Human.prototype.breathe = function () {
//     console.log('h-a-a-a-m')
// };
//
// var Zero = function(type, firstName, lastName) {
//     Human.apply(this, arguments);
//     this.firstName = firstName;
//     this.lastName = lastName;
// };
// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero;
// Zero.prototype.sayName = function () {
//     console.log(this.firstName + ' ' + this.lastName);
// };
// var oldZero = new Zero('human', 'shin', 'hyo');
// Human.isHuman(oldZero);



// --------------------------------------최신문법

class Human {
    constructor(type = 'human') {
        this.type = type;
    }
    static isHuman(human){
        return human instanceof Human;
    }
    breathe() {
        alert('h-a-a-a-m')
    }
}
class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayName() {
        super.breathe();
        alert(`${this.firstName}, ${this.lastName}`);
    }
}
const newZero = new Zero('human', 'fgf', 'dfgdf');
Human.isHuman(newZero);