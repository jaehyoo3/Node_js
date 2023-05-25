const fs = require('fs');
const readStram = fs.createReadStream('./readme3.txt', {highWaterMark: 16});

const data = [];
readStram.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});
readStram.on('end', () => {
    console.log('end ', Buffer.concat(data).toString())
});
readStram.on("error", (err) => {
    console.log(err);
});

// 스트림 > 버퍼 메모리관리에 용이함