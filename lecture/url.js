const url = require('url');
//
// const { URL } = url;

const myURL = new URL('http://www.gitlbut.co.kr/bookList.aspx?sercate1=001001000#anchor');

console.log("url: ",myURL);
console.log("url.format() : ", url.format(myURL))