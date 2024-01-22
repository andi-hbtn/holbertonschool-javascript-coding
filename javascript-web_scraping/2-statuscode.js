#!/usr/bin/node
const request = require("request");
const apiUrl = process.argv[2];

request.get(apiUrl, (err, response, body) => {
    // if (response.statusCode === 200) {
    //     console.log({ code: response.statusCode });
    // }
    if (err) {
        console.error(err);
        return err
    }
    console.log({ code: response.statusCode });
})

