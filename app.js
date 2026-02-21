const fs = require('fs');

console.log("Server is starting...");

fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});