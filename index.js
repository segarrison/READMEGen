// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your project's name? ",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions? ",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information: ",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines: ",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructins: ",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license: ",
    choices: ["None", "MIT License", "CC0 1.0 Universal"],
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your GitHub user name? ",
  },
  {
    type: "input",
    name: "email",
    message:
      "What email address do you want to be contacted at regarding this repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeToFile("READMEgen.md", generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Succesfully created READMEgen.md!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
