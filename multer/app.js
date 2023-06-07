const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({
  storage: multer.diskStorage({ // storage 저장소 정하기.
    destination(req, file, done) { //어디다가 저장할지 정하는 함수
      done(null, 'uploads/'); // 폴더설정 done(null <-- 에러처리할때 첫번째에 null 넣기
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일이름.
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //파일 제한
});
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});

// app.use(upload.single('image')) <--이렇게 해두되나 라우터로에서 적용할때는 밑에처러함 적용함
//upload.single - 1개 upload.array - 멀티플 upload.fields - 이미지 여러갸
app.post('/upload', upload.fields([{name : 'image1'}, {name: 'image2'}, {name: 'image3'}]), (req, res) => {
  console.log(req.file);
  res.send('ok');
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
