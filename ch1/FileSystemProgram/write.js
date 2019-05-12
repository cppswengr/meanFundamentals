const fs = require('fs');
fs.writeFile('write.txt', 'Welecome to Packt', function(err, data) {
    if (err) throw err;
    console.log('Written!');
});