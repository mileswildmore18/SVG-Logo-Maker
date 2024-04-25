//Provides all the npm install recommended to use this program
const inquirer = require('inquirer');
const fs = require('fs');
//const { Circle, Triangle, Square } = ;
const colors = require('colors');
//Provides the prompts to fill in the answers the user provides
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What characters would you like to use for your text?',
            validate: function(input) {
                if (input.length <= 3) {
                    return true;
                } else {
                    return 'Please enter up to three characters';
                }
            }
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like to use for your text?',
        },
        {
            type: 'list',
            name: 'fillcolor',
            message: 'What shape would you like to use?',
            choices: ['circle', 'triangle', 'square'],
        },

        {
            type: 'input',
            name: 'fillcolor',
            message: 'What color would you like to use to fill your shape?',
        }

    ]
    .then((response) =>
    console.log([response.inquirer]`Generated logo.svg`))
    );

//Creates a function to write a SVG file
function writeToFile(filename, data) {
fs.writeFile('logo.svg', data, (error) => {
    if(error) throw error;
})    
}
//Creates a function to initialize app
function init() { }
    //asks the questions
inquirer.prompt(questions).then((answers) => {
    //passes the answers to the next string
    const string = shapes(answers)
    //writes the file with that string
    writeToFile('logo.svg', string)
})

//Function call to initialize app
init();

const shapes= require('./lib/shapes');
