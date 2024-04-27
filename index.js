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
                validate: function (input) {
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
            userChoice.setColor(response.shapecolor)
            const myCoolLogo = new SVG()
            myCoolLogo.setShape(userChoice)
            myCoolLogo.setText(response.text, response.textColor)

            //Creates a new SVG file
            fs.writeFile('logo.svg', myCoolLogo.render(), (err) => {
                err ? console.error(err) : console.log('Generated logo.svg')
            })
        });
}


start();