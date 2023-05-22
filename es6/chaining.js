// 널 병합 연산자는 주로 || 연산자 대용으로 사용되며 , falsy 값(0, false, NaN, null , undefined)중  null과 undefined만 따로 구분
const a = 0;
const b = a || 3; // || 연산자는 falsy 값이면 뒤로 넘어감

console.log(b);

const c = 0;
const d = c ?? 3;

console.log(d);

const e = null;
const f = e ?? 3;
console.log(f);

const g = undefined;
const h = g ?? 3;
console.log(h);

const aa = {}
aa.bb; //a가 객체이므로 문제없음

const cc = null;
try {
    cc.dd;
} catch (e) {
    console.error(e); // c가 undefinded / null
}

cc?.dd; // 문제없음