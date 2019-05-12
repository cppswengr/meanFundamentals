let fs = require('fs');
fs.readFile('read.txt', function(err, data) {
    if (err) throw err;
    console.log('Read!');
});