class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
}

class Employee extends Person{
    designation:string;

    constructor(name:string, age:number, designation:string){
        super(name, age);
        this.designation=designation;
    }

    introduction()
    {
        console.log(
            `
            Name: ${this.name}
            Age: ${this.age}
            Designation: ${this.designation}
            `
        )
    }
}


let employee = new Employee('John', 30, 'Software Engineer');
employee.introduction();


/*
decryption:
- Employee class extends the Person class.
- The Employee class has a new property called designation.
- The constructor of the Employee class takes three parameters: name, age, and designation.
- super keyword is used to call the methods, properties of the parent class.
*/

/*
Output: 
Name: John
Age: 30
Designation: Software Engineer
*/
