// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
        name: 'username',
        type: 'input',
        message: 'What is your GitHub username?',
        },
        {
        name: 'email',
        type: 'input',
        message: 'What is your email address?',
        },
        {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
        },
        {
        name: 'description',
        type: 'input',
        message: 'Give a breif description of your project.',
        },
        {
        name: 'installation',
        type: 'confirm',
        message: 'Is npm i needed to run your app?',
        },

        {
        name: 'license',
        type: 'rawlist',
        message: 'Which license does your application utilize?',
        choices: ['MIT', 'BSD', 'GPL', 'None'],
        },
])
.then((answers) => {
    console.log(answers)
    var markdownTemplate = generateMarkdown(answers);
    console.log(markdownTemplate);
    fs.writeFile(`README.md`, markdownTemplate, function (err) {
        if(err){
            console.log(err);
        }else {
            console.log('successful');
        }
    })
});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
