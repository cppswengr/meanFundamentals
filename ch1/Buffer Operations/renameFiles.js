let fs = require('fs');

fs.rename('textFile.txt', 'renamedTextFile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!')
});