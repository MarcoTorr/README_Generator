// TODO: Include packages needed for this application
const confirm = require('inquirer-confirm')
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const license = require('./generateMarkdown');




const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = ["Enter a title for the Project",
"Enter a description for the project",
"Enter the usage information",
"Choose an option from the following for the license ",
"Enter the contribution guidelines",
"Enter a description of the test instructions",
"Enter your Github username","Enter your email address",
"Enter the installation instructions"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        writeFileAsync(fileName, generateContent(data))
        if (err) {
          console.error(err)
          return
        }
}
// Prompt
const promptUser = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
          },
          {
            type: 'input',
            name: 'description',
            message: questions[1],
          },
          {
            type: 'input',
            name: 'installation',
            message: questions[8],
          },
          {
            type: 'input',
            name: 'usage',
            message: questions[2],
          },
          {
              type: 'checkbox',
              name: 'license',
              message: questions[3],
              choices: [
                'BSD', 'IBM', 'MIT', 'Unlicense',
              ],
            },
          {
            type: 'input',
            name: 'contribution',
            message: questions[4],
          },
          {
            type: 'input',
            name: 'test',
            message: questions[5]
          },
          {
            type: 'input',
            name: 'gitName',
            message: questions[6],
          },
          {
              type: 'input',
              name: 'email',
              message: questions[7],
            },
        
    ]);
};
// Content generator


// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) =>{
    console.info('Answers:', answers)
    confirm('Is the information correct?')
        .then(function confirmed() {
            const data= license.generateContent(answers);
            writeFileAsync("README.MD",data)
            .then(() => console.log('Successfully wrote to README.md'))
            .catch((err) => console.error(err));
        }, function cancelled() {
            init();
        });
    });      
};


// Function call to initialize app
init();
