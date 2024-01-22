#!/usr/bin/node
const fs = require("fs");
const fileName = process.argv[2];
const textToInsert = process.argv[3];


fs.writeFile('my_file.txt', textToInsert, { encoding: 'utf8', flag: 'a+' }, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
    }
});