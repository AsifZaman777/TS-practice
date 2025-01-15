/**
 * Abstraction is a process of hiding the implementation details and showing only functionality to the user.
 */

abstract class Shape {
    abstract getArea(): number;

    describe(): void {
        console.log('This is a shape');
    }
}

class Circle extends Shape{
    radius:number;

    constructor(radius:number){
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


let circle = new Circle(10);
console.log("Area of circle: "+circle.getArea());