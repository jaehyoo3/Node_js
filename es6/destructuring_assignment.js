const example = { a:123, b: {c: 135, d: 146}}
// const a = example.a
// const d = example.b.d;

const { a, b: { d}} = example;

console.log(d);
console.log(a);

arr = [1,2,3,4,5]
// const x = arr[0]
// const y = arr[1]
// const z = arr[4]

const [x,y,,z] = arr;

console.log(x, y, z);

//구조분해 할당시 this 문제있으니 this 사용시는 구조분해 할당 X

var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = candyMachine.getCandy();
var count = candyMachine.status.count;

console.log(getCandy, count)
