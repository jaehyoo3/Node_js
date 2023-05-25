const buffer = Buffer.from('저를 버퍼로 바꿔보세요')

console.log("버퍼: ", buffer);
console.log("length: ", buffer.length);
console.log("tostring: ", buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
console.log(Buffer.concat(array).toString());
console.log(Buffer.alloc(5));


// * concat = 배열을 합쳐 새로운배열로 반환
// * alloc = 데이터를 채울 필요가 없는 빈 버퍼를 생성하고 싶을 때 유용