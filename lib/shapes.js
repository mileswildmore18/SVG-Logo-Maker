//Accept an input for the color
class Shape {
    constructor() {
        this.color = ''
    }
    //Set the color for the shape
    setColor(color) {
        this.color = color
    }


}
//Add shapes in the child class
class Circle extends Shape {
    render() {
        //add size to the radius of the x and y axis for the circle and add the color chosen by user
        return `<circle cx="100" cy="150" r="100" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        //add size to the x and y axis with the width and height size of the square and add the color chosen by user 
        return `<rect x="5" y="5" width="300" height="300" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    render() {
        //add size to sides and body of the triangle and add the color based on the user's choice
        return `<polygon points="100, 5 190, 180 10, 180" fill="${this.color}"/>`
    }
}
//Export classes to another file for it to work
module.exports = { Circle, Square, Triangle }