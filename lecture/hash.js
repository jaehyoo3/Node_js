const crypto = require('crypto');

console.log("base 64 ", crypto.createHash('sha512').update('1234').digest('base64'));
console.log("hex ", crypto.createHash('sha512').update('1234').digest('hex'));
console.log("base 64 ", crypto.createHash('sha512').update('123456').digest('base64'));