const fs = require('fs');

const readableStream = fs.createReadStream('readTextFile.txt');

const writableStream = fs.createWriteStream('writeTextFile.txt');

readableStream.on('data', function(data) {
    console.log('Hey!, I am about to write what has been read from the file' +
        ' readTextFile.txt');

    if (writableStream.write(data) === true) {
        console.log('Hey!, I am done writing.  Open the file writeTextFile.txt' +
            ' to see what has been written');
        console.log();
        console.log('Or just look below :)');
        console.log('Data -->' + data)
    }
    else
        console.log('Writing is not successful');
});

