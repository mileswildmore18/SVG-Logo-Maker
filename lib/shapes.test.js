const {Triangle, Circle, Square} = require('./shapes.js');

    describe('Triangle', () => {
        it('should form a triangle and pass', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="100, 5 190, 180 10, 180" fill="blue"/>');

        });
    })
    describe('Circle', () => {
        it('should form a circle and pass', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<circle cx="100" cy="150" r="100" fill="blue"/>`);
        })
    })
    describe('Square', () => {
        it('should form a square and pass', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<rect x="5" y="5" width="300" height="300" fill="blue"/>`);
        })
    })

