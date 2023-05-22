// 프로미스 : 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
// then을 붙이면 결과를 반환함
// 실행이 완료되지 않았으면 완료된후에 then 내부 함수가 실행됨
// resolve(성공리턴값) -> then
// reject(실패리턴값) -> catch
// finally 부분은 무조건실행

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    } else {
        reject('실패')
    }
});
promise.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
})

// 콜백 헬 예시)
function findAdnSaveUser(Users) {
    Users.findOne({}, (err, user) => {
        if(err) {
            return console.log(err);
        }
        user.name = 'hyo';
        user.save((err) => {
            if(err) {
                return console.log(err);
            }
            Users.findOne({ gender: 'm'}, (err, user) => {
                //콜백
            });
        });
    });
}
// 위 코드를 promise로 바꿀시
function findAndSaveUserPro(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'hyo';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({gender: 'm'});
        })
        .then((user) => {
            //생략
        })
        .catch((err) => {
            console.error(err);
        });
}
//Promise.resolve(성공리턴값) 바로 resolve 하는 프로미스
//Promise.reject(실패리턴값) 바로 reject하는 프로미스
const promies1 = Promise.resolve('성공1');
const promies2 = Promise.resolve('성공2');
Promise.all([promies1, promies2])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error)
});
// Promise.all(배열) 프로미스 동시 실행
// 하나라도 실패하면 catch로감
// allSettled로 실패한것만 추려낼수있음

// 요즘은 promise.all 보단 promise.allSettled 사용

//async / await 으로 promise 패턴코드 축약 가능
//await then 역할
//실행순서 오른쪽에서 왼쪽
async function findANdSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'hyo';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});
    } catch(error) {
        console.error(error);
    }
}
//함수 async 중요

// const promises = new Promise(...)
// promises.then((result) => ...)
// const result = await promises;
// 옛날엔 안됐으나 요즘은 사용가능
// async에서 리턴값은 전부 then으로 출력



// findAdnSaveUser().then(() => {..})

async function other() {
    const result = await findAdnSaveUser();
}


//for await
(async () => {
    for await (promise of [promies1, promies2]) {
        console.log(promise);
    }
})();
