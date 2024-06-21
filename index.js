//Gather the packages needed for this project to function
const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes')
const SVG = require('./lib/svg')

// Generating information from the questions answered 
function start() {



    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'What characters would you like to use for your text?',
                //Check the input
                validate: function (input) {
                    if (input.length <= 3) {
                        //Accepts input if 3 characters are entered or less
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
                name: 'shape',
                message: 'What shape would you like to use?',
                choices: ['Circle', 'Triangle', 'Square']
            },

            {
                type: 'input',
                name: 'shapecolor',
                message: 'What color would you like to use to fill your shape?',
            }

        ])
        //Choosing the shape
        .then((response) => {
            let userChoice;
            //Create shape based on user input from choices
            switch (response.shape) {
                case 'Circle':
                    userChoice = new Circle()
                    break;
                case 'Triangle':
                    userChoice = new Triangle()
                    break;
                case 'Square':
                    userChoice = new Square()
                    break;


            }
            //Creates a copy from the method of the shape and text color
            //Generate shape color on user input
            userChoice.setColor(response.shapecolor)
            const myCoolLogo = new SVG()
            //Generate shape on user input
            myCoolLogo.setShape(userChoice)
            //Generate text color on user input
            myCoolLogo.setText(response.text, response.textColor)

            //Creates a new SVG file
            fs.writeFile('logo.svg', myCoolLogo.render(), (err) => {
                //Provide error message if information fails
                //Create the SVG file if information succeeds
                err ? console.error(err) : console.log('Generated logo.svg')
            })
        });
}

//call the start function
start();