const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if(isMainThread) { //메인스레드
    const thread = new Set();
    thread.add(new Worker(__filename, {
        workerData: { start : 1},
    }));
    thread.add(new Worker(__filename, {
        workerData: { start : 2},
    }));

    for(let worker of thread) {
        worker.on('message', (value) =>  console.log('워커로부터', value));
        worker.on('exit', () => {
            thread.delete(worker);
            if(thread.size === 0) {
                console.log('워커 끝');
            }
        });
    }

} else { //워커스레드
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}

// 메인스레드 실행 -> 워커스레드 생성 -> 워커스레드 분배 -> 워커스레드 종료 -> 메인스레드에서 워커스레드 합친후 리턴