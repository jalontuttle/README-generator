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
        type: 'input',
        message: 'Is anything needed to be installed for your app to run correctly?',
        },
        {
        name: 'usage',
        type: 'input',
        message: 'Give a brief explination of how you will use this application.',
        },
        {
        name: 'license',
        type: 'rawlist',
        message: 'Which license does your application utilize?',
        choices: ['MIT', 'BSD', 'Apache', 'None'],
        },
        {
        name: 'contribution',
        type: 'input',
        message: 'Please include the names and GitHub links of others who contributed to this application.',
        },
        {
        name: 'tests',
        type: 'input',
        message: 'Please include any tests that are running with your application.',
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
