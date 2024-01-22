const fs = require("fs");
const fileName = process.argv[2];

fs.readFile(fileName, { encoding: 'utf8', flag: 'r' }, (error, fileContent) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(fileContent);
});