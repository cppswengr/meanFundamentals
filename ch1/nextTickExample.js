function log(n) { console.log(n); }

process.nextTick(function A() {
    process.nextTick(function B() {
        log(1);
        process.nextTick(function D() { log(2); });
        process.nextTick(function E() { log(3); });
    });
    process.nextTick(function C() {
        log(4);
        process.nextTick(function F() { log(5); });
        process.nextTick(function G() { log(6); });
    });
});

setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0)

// 1 4 2 3 5 6 'TIMEOUT FIRED'