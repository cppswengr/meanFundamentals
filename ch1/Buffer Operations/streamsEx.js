const fs = require('fs');
const file = fs.createReadStream('readTextFile.txt');

file.on('data', function(data) {
    console.log('Data - ' + data);
});

file.on('end', function() {
    console.log("Hey!, I'm done reading Data");
});