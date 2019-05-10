let fs = require('fs');
fs.readFile('readTextFile.txt', function(err, data) {
    if (err) throw err;
    console.log('Read! --- ' + data);
});