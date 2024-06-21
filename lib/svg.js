//Provide parent class for SVG
class SVG {
    constructor() {
        this.textEl = ''
        this.shapeEl = ''
    }
    //Add the shape, text, and color to the string of the logo
    render() {
        //provide shape from website with width and height size
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">${this.shapeEl}${this.textEl}</svg>`
    }
    //Provide color, font, size, and position for text
    setText(text, color) {
        this.textEl = `<text x="100" y="170" font-family="Arial" font-size="65" fill="${color}" text-anchor="middle">${text}</text>`
    }
    //Adding the shape in from the index.js
    setShape(shape) {
        this.shapeEl = shape.render()
    }
}
//export the SVG to other files to communicate with each other
module.exports = SVG