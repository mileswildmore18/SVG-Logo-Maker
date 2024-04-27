class CLI {
    run() {
    const inquirer = require('inquirer');
    const shapes = require('./shapes')
    const fs = require('fs');
    const shapeChoices = ['Circle', 'Triangle', 'Square'];
    const colors = require('colors');
    //Provides the prompts to fill in the answers the user provides
    
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
                    name: 'textcolor',
                    message: 'What color would you like to use for your text?',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape would you like to use?',
                    choices: shapeChoices,
                },

                {
                    type: 'input',
                    name: 'shapecolor',
                    message: 'What color would you like to use to fill your shape?',
                }

            ])
            .then((response) => {
                shapes.createSVG(response.text, response.textcolor, response.shape, response.shapecolor)
            });

    }
}

module.exports = CLI;
return inquirer;
