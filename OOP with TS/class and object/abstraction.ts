// show the abstraction concept in typescript using abstract class, interface

// using abstract class
abstract class Animal {
    constructor(public name: string) {}
    abstract makeSound(): void;
    move(): void {
        console.log(`${this.name} is roaming the earth...`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log(`${this.name} says: bark bark`);
    }
}

const dog = new Dog('Buddy');
dog.makeSound();
dog.move();

// using interface
interface AnimalInterface {
    makeSound(): void;
}

class Cat implements AnimalInterface {
    constructor(public name: string) {}
    makeSound(): void {
        console.log(`${this.name} says: meow meow`);
    }
}

const cat = new Cat('Whiskers');
cat.makeSound();





