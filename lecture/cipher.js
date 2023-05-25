const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456";

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('1234', 'utf-8', 'base64');
result += cipher.final('base64');
console.log(result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let  result2 = decipher.update(result, 'base64', 'utf-8');
result2 += decipher.final('utf-8');
console.log(result2)

//crypto - js 사용 권장
// 양방향 aes 추천
// 비대칭 암호화는 rsi
// 비밀번호 kms 이용