{
    /*
    Alias: Alias allows to define types with a custom name

    Alias can be used for the premitives like string or more complex types like objects, arrays, functions etc.

    */
}

//#region Aliases
// Aliases for primitive types
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
};


let myCar: Car = {
    year: 2020,
    type: 'SUV',
    model: 'X5'
};

console.log(myCar);
myCar.year = 2021;
console.log(myCar);

// Aliases for non-primitive types
type Engine = {
    type: string;
    power: number;
};

type Vehicle = {
    type: string;
    brand: string;
    model: string;
    engine: Engine;
};

let myVehicle: Vehicle = {
    type: 'Car',
    brand: 'BMW',
    model: 'X5',
    engine: {
        type: 'V8',
        power: 500
    }
};

console.log(myVehicle);


// Aliases for function types
type AddFunction = (a: number, b: number) => number;

let add: AddFunction = (a, b) => a + b;
console.log(add(10, 20));


// Aliases for array types
type NumberArray = number[];
let numbers: NumberArray = [1, 2, 3, 4, 5];
console.log(numbers);



// #region Interfaces
// Interfaces are same as aliases but only apply to object types

interface keybord {
    keys: number;
    type: string;
    brand: string;
}

let myKeyboard: keybord = {
    keys: 104,
    type: 'Mechanical',
    brand: 'Logitech'
};

console.log(myKeyboard);

// Extending interfaces
interface Mouse {
    buttons: number;
    type: string;
}

interface GamingMouse extends Mouse {
    dpi: number;
}

let myGamingMouse: GamingMouse = {
    buttons: 6,
    type: 'Wireless',
    dpi: 1600
};

console.log(myGamingMouse);


// Implementing interfaces
interface Monitor {
    resolution: string;
    brand: string;
}

class LEDMonitor implements Monitor {
    resolution: string;
    brand: string;

    constructor(resolution: string, brand: string) {
        this.resolution = resolution;
        this.brand = brand;
    }
}           

let myMonitor = new LEDMonitor('1080p', 'Dell');
console.log(myMonitor);


// Merging interfaces
interface Laptop {
    brand: string;
}

interface Laptop {
    model: string;
}

let myLaptop: Laptop = {
    brand: 'HP',
    model: 'Pavilion'
};

console.log(myLaptop);





// | Feature                                       | `type` (Alias)                      | `interface`                      |
// |-----------------------------------------------|------------------------------------|--------------------------------|
// | Can define objects?                           | ✅ Yes                             | ✅ Yes                         |
// | Can define primitives, unions, intersections? | ✅ Yes                             | ❌ No                          |
// | Can be extended/implemented?                  | ❌ No (`&` for intersection)       | ✅ Yes (`extends`, `implements`) |
// | Can be merged (declaration merging)?          | ❌ No                              | ✅ Yes                         |


