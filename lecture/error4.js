process.on("uncaughtException", (err) => {
    console.error("예기치 못함", err);
});

setInterval(() => {
    throw new Error('서버 고장');
}, 1000);

setTimeout(() => {
    console.log('실행');
});