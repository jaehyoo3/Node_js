const m = new Map();
// map - key : value
m.set('a', 'b');
m.set(3,'c');
const d = { kye : 'a', as : '3', dss : 'd'};
m.set(d,'e');

m.get(d);
console.log(m);

m.size;
console.log(m.size);

for(const [k, v] of m) {
    console.log(k, v)
}

m.forEach((v,k) => {
    console.log(k,v);
})

console.log(m.has(d));

m.clear() // map 데이터 clear

const s = new Set();
// set 중복 추가안되는 set
s.add(1)
s.add(2)
s.add(1)

s.has(1);

for(const a of s) {
    console.log(a);
}

s.forEach((a) => {
    console.log(a);
})
s.delete(1);
s.clear();

//중복제거 꿀팁
const arr = [1,2,3,2,2,1,2,4,5,4,3,3,2]
const s2 = new Set(arr);

Array.from(s2); // 셋으로 중복 제거한것을 다시 배열로

// WeakMap - 메모리에서 빠르게 정리
// WeakSet

const wm = new WeakMap();
let obj3 = {};
wm.set(obj3, '123');
obj3 = null;

let user = { name : 'zero ', age: 27}
user.married = false;

wm.set(user, {married : false});
user = null 