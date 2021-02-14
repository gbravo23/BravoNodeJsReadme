// TODO: Include packages needed for this application
var fs = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description?"
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Please list the table of contents?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe the installation?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please detail the usage?"
    },
    {
        type: "input",
        name: "license",
        message: "Please include any licenses?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe how to contribute?"
    },
    {
        type: "input",
        name: "testing",
        message: "Please describe how to test?"
    },
    {
        type: "input",
        name: "questions",
        message: "Please include FAQs?"
    }
]).then(response => {
    console.log("the response is" + response);
    const markdownInfo = generateMarkdown(response);
    console.log("after sending through markdown" + markdownInfo);
    writeToFile("Readme.md", markdownInfo);
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("file written");
    }
    );
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
