//Accepts an input for the color
class Shape {
    constructor() {
        this.color = ''
    }
    //Sets the color
    setColor(color) {
        this.color = color
    }


}
//Adding shapes in the child class
class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="150" r="100" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="5" y="5" width="300" height="300" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="100, 5 190, 180 10, 180" fill="${this.color}"/>`
    }
}
module.exports = { Circle, Square, Triangle }