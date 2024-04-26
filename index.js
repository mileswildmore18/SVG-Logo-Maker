
// const { default: inquirer } = require("inquirer");
// const CLI = require("./lib/CLI");

// new CLI().run();
// // run(); {
//     return inquirer
//     .prompt()
//     .then()
//     .catch()
// }

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