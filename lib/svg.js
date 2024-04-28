class SVG {
    constructor() {
        this.textEl = ''
        this.shapeEl = ''
    }
    //Adding the shape, text, and color to the string of the logo
    render() {
        return `<svg xmlns="http:www.w3.org/2000/svg" width="200" height="300">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(text, color) {
        this.textEl = `<text x="100" y="170" font-family="Arial" font-size="65" fill="${color}" text-anchor="middle">${text}</text>`
    }
    //Adding the shape in from the index.js
    setShape(shape) {
        this.shapeEl = shape.render()
    }
}
module.exports = SVG