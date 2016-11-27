"use strict"
const request = require("request");
const fs = require("fs");
const url = "https://jsonplaceholder.typicode.com";

const read = (callback) => {

    console.log("starting...");

    request(url + "/users", (error, response, body) => {

        if (!error && response.statusCode == 200) {
            console.log("recieved!");
            let text = "";
            const users = JSON.parse(body);

            for (let i = 0; i < users.length; i++) {
                text += `<h1>${users[i].name}</h1>`;
            }

            callback(text);
        }

    });

};

user((text) => {

    console.log("writing...");

    fs.writeFile("./request/text.txt", text, (error) => {
        if (error) throw error;
        console.log("success!")
    });

});