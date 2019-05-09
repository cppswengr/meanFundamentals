let eEmitter = require('events');

class emitter extends eEmitter {}
let myEemitter = new emitter();

myEemitter.on('event', () => {
    console.log('Hey, an event just occurred!');
    console.log("Mr.");
    setImmediate(function() {
        console.log("Pick");
    });
    console.log("Piper");
});

myEemitter.emit('event');
