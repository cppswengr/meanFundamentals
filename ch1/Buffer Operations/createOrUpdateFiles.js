let fs = require('fs');

// fs.appendFile example
//
let text = ' Hey John, Welcome to Packt class.';

fs.appendFile('newTextFile.txt', text, function(err) {
    if (err) throw err;
    console.log('Saved!');
});

// fs.open example
//
fs.open('textFile.txt', 'w', function(err, file) {
    if (err) throw err;

    // let's assume the file doesn't exist
    console.log('An empty file is created');
});

// fs.writeFile
//
fs.writeFile('textFile.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});