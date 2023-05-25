const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data) => {
        console.log('1번', data.toString())
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('2번', data.toString())
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('3번', data.toString())
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('4번', data.toString())
        return fs.readFile('./readme.txt');
    })
    .catch((error) => {
        throw error;
    });
// ↑ 프로미스 형식 / ↓ await 형식
async function main() {
    let data = await fs.readFile('./readme.txt');
    console.log("1번",data.toString())
    data = await fs.readFile('./readme.txt')
    console.log("2번",data.toString())
    data = await fs.readFile('./readme.txt')
    console.log("3번",data.toString())
    data = await fs.readFile('./readme.txt')
    console.log("4번",data.toString())
}

main();