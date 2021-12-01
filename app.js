const inquirer = require("inquirer");
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?'
        }
    ])
    .then(answers => console.log(answers));

/* const fs = require("fs");
const generatePage = require("./src/page-template.js");

const pageHTML = generatePage(name, github);

fs.writeFile("./index.html", pageHTML, err => {
    if (err) throw err;
    console.log("complete, see index.html");
}); */

