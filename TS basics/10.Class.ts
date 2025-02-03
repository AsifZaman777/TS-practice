class User {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    getName():string {
        return this.name;
    }
}

const user = new User('John Doe');
console.log(user.getName());


//parameter properties. Typescript has a shorthand for defining properties in the constructor.
class User1{
    constructor(private name:string){}

    getName():string{
        return this.name;
    }
}

const user1 = new User1('Alice');
console.log(user1.getName());

// readonly properties. readonly properties can never be changed once they are initialized.
class User2{
    constructor(readonly name:string){}

    getName():string{
        return this.name;
    }
}

const user2 = new User2('Bob');
console.log(user2.getName());



//implements vs extends

//#region Implement
//implements is used to implement an interface in a class.
//loosly coupled interface
interface IEmployee{
    name:string;
    salary:number;
    getDetails():string;
}

class LBSEmployee implements IEmployee{
    constructor(public name:string, public salary:number){}

    getDetails():string{
        return `Employee name is ${this.name} and salary is ${this.salary}`;
    }
}

const emp = new LBSEmployee('John Doe', 1000);
console.log(emp.getDetails());

class Contractor implements IEmployee {
    constructor(public name: string, public salary: number, public contractDuration: number) {}

    getDetails(): string {
        return `Contractor name is ${this.name}, salary is ${this.salary}, and contract duration is ${this.contractDuration} months.`;
    }
}

const contractor = new Contractor('Jane Doe', 2000, 12);
console.log(contractor.getDetails());

// Another class implementing the same interface
class PartTimeEmployee implements IEmployee {
    constructor(public name: string, public salary: number, public hoursPerWeek: number) {}

    getDetails(): string {
        return `Part-time employee name is ${this.name}, salary is ${this.salary}, and works ${this.hoursPerWeek} hours per week.`;
    }
}

const partTimeEmp = new PartTimeEmployee('Alice Smith', 1500, 20);
console.log(partTimeEmp.getDetails());

//#endregion

//#region Extends

//extends is used to inherit from another class.
class LBEngineer extends LBSEmployee{
    constructor(name:string, salary:number, public designation:string){
        super(name, salary);
    }

    getDetails():string{
        return `Engineer name is ${this.name}, salary is ${this.salary}, and designation is ${this.designation}`;
    }
}

const engineer = new LBEngineer('John Doe', 2000, 'Software Engineer');
console.log(engineer.getDetails());

//#endregion

//#region Override

//When a class extend  another class, it can override the methods of the parent class using the same name.

interface IShape {
    getArea(): number;
}

class Rectangle implements IShape {
   constructor (protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle: width = ${this.width}, height = ${this.height}`;
    }
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }

    //this toString method overrides the toString method of the parent class.
    public override toString(): string {
        return `Square: side = ${this.width}`;
    }
}


const square = new Square(5);
console.log(square.toString());

//#endregion

//#region Abstract class
//Abstract classes are used to define a common structure for a group of classes that have similar behavior.

abstract class Polygon{
    public abstract getArea():number;

    public toString():string{
        return `Area is ${this.getArea()}`;
    }
}

class Rect extends Polygon{
    constructor(private width:number, private height:number){
        super();
    }

    public getArea():number{
        return this.width * this.height;
    }
}

const rect = new Rect(5, 10);
console.log(rect.toString());

//#endregion
















