const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme3.txt',{highWaterMark:16});
const zilbStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./writeme4.txt');
readStream.pipe(zilbStream).pipe(writeStream);


