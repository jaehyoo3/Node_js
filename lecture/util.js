const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y) => {
    console.log(x + y);
}, "이 함수는 deprecated 되었으니 사용하지 마세요.");
dontUseMe(1, 2);

const randomBy = util.promisify(crypto.randomBytes);
randomBy(64)
.then((buf) => {
    console.log(buf.toString("base64"));
}).catch((error) => {
console.error(error)});
