console.log("Mr.");
setImmediate(function() {
    console.log("Piper");
});
console.log("Pick");


setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0);
