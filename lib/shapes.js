function Shapes() { }

class Shape {
    constructor(color, shape, size) {
        this.color = color;
        this.shape = shape;
        this.size = size;
    }
}

class Circle extends Shape {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
}

class Triangle extends Shape {
    constructor(color, size) {
        this.color = color; 
        this.size = size;
    }
}

class Square extends Shape {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
}
// .then
// let
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }