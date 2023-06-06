const express = require('express')
const path = require('path')
const app = express();


app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
    console.log('1모두 실행');
    next();
},
(req, res, next) => {
    console.log('2모두 실행');
    next();
},(req, res, next) => {
    console.log('3모두 실행');
    next();
}, (req, res) => {
    throw new Error('에러임');
    });
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express');
});
app.get('/category/JavaScript', (req, res) => {
    res.send(`hello java`);
});
app.get('/category/:name', (req, res) => {
    res.send(`hello wlidcard`); //${req.params.name}
});

app.get('/about', (req, res) => {
    res.send('hello express');
});
app.use((req, res, next)=> {
    res.status(404).send('404임');
});
app.use((err, req, res, next) => { //필수 4개.
    console.error(err);
    res.status(500).send('비밀 에러');
});
app.listen(app.get('port'), () => {
    console.log('익스프레스 서버');
});
