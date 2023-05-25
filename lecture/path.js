const path = require('path')

console.log(path.join(__dirname, '..','/var.js'));
console.log(path.resolve(__dirname, '..', '/var.js'));
console.log(path.relative(__dirname, 'C:\\Users\\troup\\WebstormProjects\\Node_js\\var.js', 'C:\\'));

// join과 resolve의 차이 : resolve는 /를 절대경로로 , join은 상대경로로