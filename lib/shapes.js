const fs = require('fs');
// add the necessary npms for the project
const CLI = require('./CLI')
//makes class shapes

class CLI {
    constructor(shapeColor, shape, text, textColor) {
        this.textColor = textColor,
        this.text = text;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    createSVG() {
        let svg = '';

        let shapeAtt = '';
        switch (this.shape) {
    case 'circle':
        shapeAtt ='cx="50" cy="50" r="40"';
        break;
    case 'triangle':
        shapeAtt = 'points = "50,10 90,90 10,90"';
        break;
    case 'square':
        shapeAtt = 'x="10" y="10" width="80" height="80"';
        break;
    default:
        console.log('Invalid shape.');
        return;
}
const style = `fill${this.textColor}`;
const text = `<text x="50" y="60" font-family="Arial" font-size="20" fill="white" text-anchor="middle">${this.text}`;

svg += `svg xmlns="http:www.w3.org/2000/svg" width="100" height="100">`;
svg += `<${this.shape} ${shapeAtt} style= ${style}" />`;
svg += text;
svg += `</svg>`;

fs.writeFile(`${answers.shape}.svg`, svg), (error) =>
error ? console.log(error) : console.log(`Success!`)
    }
}

module.exports = CLI;