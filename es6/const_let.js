const a = 3;
a = '5' // 에러

const b = { name : 'jaehyo'}
b.name = 'shinjaehyo' // 이건가능
// const는 재선언 불가

let c = 5;
c = 3;
c = 10;
// let은 재선언 가능

var won = 1000;
var result = '이 과자는 ' + won + '원 입니다.';
// 옛날 방식-> 이 과자는 1000원 입니다.

//최신문법
const result2 = `이 과자는 ${won}원 입니다.`;

function a() {}
a();
a`` //이렇게 호출 가능 (최신문법)