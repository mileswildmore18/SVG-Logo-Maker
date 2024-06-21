//Provide the function to run the application when the node command is entered 
class CLI {
    //Start the function of the index with all the files included
    run() {
        const inquirer = require('inquirer');
        const shapes = require('./shapes')
        const fs = require('fs');
        const shapeChoices = ['Circle', 'Triangle', 'Square'];
        const colors = require('colors');
        
        //Provide the prompts to fill in the answers the user provides
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'What characters would you like to use for your text?',
                    //Check the input
                    validate: function (input) {
                        if (input.length <= 3) {
                            //Accepts input if at least 3 characters are entered
                            return true;
                        } else {
                            //Return message if criteria information is not met
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
            //Generate response from the answers given from the user
            .then((response) => {
                shapes.createSVG(response.text, response.textcolor, response.shape, response.shapecolor)
            });

    }
}
//export CLI to other files to communicate with each other
module.exports = CLI;
return inquirer;
