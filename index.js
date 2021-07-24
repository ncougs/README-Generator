// Packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions to be asked to the user

function Question(type, name, message, choices) {
    this.type = type,
    this.name = name,
    this.message = message,
    this.choices = choices
};

const title = new Question('input', 'title', `What is your projects title?`);
const description = new Question('input', 'description', `Please enter a description of your project`);
const installationInstructions = new Question('input', 'installationInstructions', `Please enter any installation instructions`);
const usageInformation = new Question('input', 'usageInformation', `Please enter any usage information`);
const contributionGuidelines = new Question('input', 'contributionGuidelines', `Please enter any contribution guidelines`);   
const testInstructions = new Question('input', 'testInstructions', `Please enter any test instructions`);
const name  = new Question('input', 'name', `What is your name?`);
const username  = new Question('input', 'username', `Please enter your GitHub username`);
const email  = new Question('input', 'email', `Please enter your email address`);
const license  = new Question('list', 'license', `What license do you want applied to thie project?`, ['Apache License', 'GNU General Public License', 'MIT License']);

const questions = [title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, name, username, email, license];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
      /* Pass your questions in here */
        questions
    )
    .then((answers) => {
      // Use user feedback for... whatever!!
      const readME = generateMarkdown(answers);
      console.log(readME);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });}

// Function call to initialize app
init();
