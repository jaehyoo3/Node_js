const http = require("http");

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie' : 'mycookie=test'});
    res.end('hello cookie');
})
.listen(8083, () => {
    console.log("서버 온");
})