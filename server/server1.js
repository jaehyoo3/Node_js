const http = require("http");

// http.createServer((req, res) => {
//     res.write('<h1>ㄹㅇㅎㅇㄹ</h1>');
//     res.write('<h1>ㄹdgdf</h1>');
//     res.end('<h1>ㄹdfgdfg</h1>');
// })
//     .listen(8080, () => {
//         console.log("8080번")
//     });
//
const server = http.createServer((req, res) => {
    res.write('<h1>sdfsdcxvxc</h1>');
    res.write('<h1>dsf</h1>');
    res.end('<h1>qdfgfd</h1>');
})
    .listen(8080);
server.on('listening', () => {
    console.log('서버 대기중');
});
server.on('error', (error) => {
    console.error(error);
});

