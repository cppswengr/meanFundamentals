let fs = require('fs');

fs.unlink('textFile.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});