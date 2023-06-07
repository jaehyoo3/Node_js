const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const path = require('path')
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
app.set('port', process.env.PORT || 3000);
// app.use(morgan('dev')); //개발시
app.use(morgan('combined')); //배포시
app.use('/', express.static(path.join(__dirname, 'public')));// 순서 생각하기
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized : false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
    },
    name: 'connect.sid'
}));
app.use('/', (req, res, next) => {
    if(req.session.id) {
        express.static(path.join(__dirname, 'public'))(req, res, next)
    } else {
        next();
    }
});
// 로그인시에만 볼수있는 웹사이트 패턴 (미들웨어 확장)
app.use(express.json()); // body-parser // json 파싱
app.use(express.urlencoded({extended: true})); // body-parser form submit url인코딩 form파싱 // ture면 qs false query string
// app.use('요청경로', express.static(__dirname, '실제 경로'));


app.use((req, res, next) => {
    req.data = '비번'
    console.log('1모두 실행');
    next();
// ,
// (req, res, next) => {
//     console.log('2모두 실행');
//     next();
// },(req, res, next) => {
//     try {
//         console.log(ㅁㄴㅇㅁㄴㅇ);
//     } catch(error) {
//         next(error);
//     }
// });
});

app.get('/', (req, res, next) => {
    req.data;
    req.body.name
    req.cookies;
    req.signedCookies;
    req.session.id = 'hello';
    // res.cookie('zxc', encodeURIComponent(name), {
    //     expires: new Date(),
    //     httpOnly : true,
    //     path: '/',
    // })

    // res.clearCookie('name', encodeURIComponent(name), {
    //     httpOnly : true,
    //     path: '/',
    // })

    res.status(200).sendFile(path.join(__dirname, './index.html'));
//     if(false) {
//         next('route')
//     } else {
//         next();
//     }
// }, (req, res) => {
//     console.log('실행되나요 ?')
// }
});

app.get('/', (req, res) => {
    console.log('잘됩니다')
});

app.get('/set', (req, res) => {
    res.json({hello: 'hi'});
    console.log('hi')
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
    res.status(200).send('비밀 에러');
});
app.listen(app.get('port'), () => {
    console.log('익스프레스 서버');
});
