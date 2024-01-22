const request = require("request");
const apiParam = process.argv[2];

request.get(`https://swapi-api.hbtn.io/api/films/${apiParam}`, (err, response, body) => {
    const result = JSON.parse(body);
    console.log("result-----", result.title);
});