//#region Problem
//lets explore the problem. We want to create a function that takes multiple types of arguments and returns them.

function logsAndReturns(value: number | string): number | string {
    return value;
}

const numberResult: string | number = logsAndReturns(10);
const stringResult: string | number = logsAndReturns('Hello');  

console.log(numberResult);
console.log(stringResult);


//now lets try to add a third type of argument
{/*
    const booleanResult: string | number | boolean = logsAndReturns(true); //this will not work
    to solve this problem we need to use again the union type and then we need to check the type of the argument. Moreover we can use any but it is not recommended for the type safety.

    Generics can solve this problem. Generics allow us to create a function that can work with a variety of types.

*/} 


//#endregion

//#region Generics
function logsAndReturnsGeneric<T>(value: T): T {
    return value;
}

const numberResultGeneric: number = logsAndReturnsGeneric(10);
const stringResultGeneric: string = logsAndReturnsGeneric('Hello');

console.log(numberResultGeneric);
console.log(stringResultGeneric);



//#endregion



//#region Generics Syntax
/*
| Concept              | Syntax                                                  | Example |
|----------------------|---------------------------------------------------------|------------------------------------------------|
| Generic Function    | function functionName<T>(param: T): T { ... }          | function identity<T>(arg: T): T { return arg; } |
| Generic Interface   | interface InterfaceName<T> { ... }                     | interface GenericIdentityFn<T> { (arg: T): T; } |
| Generic Class       | class ClassName<T> { ... }                             | class GenericNumber<T> { zeroValue: T; add: (x: T, y: T) => T; } |
| Generic Method      | methodName<T>(param: T): T { ... }                     | class GenericClass { methodName<T>(param: T): T { return param; } } |
| Generic Type Alias  | type TypeName<T> = { ... };                            | type GenericArray<T> = Array<T>; |
| Generic Constraints | function functionName<T extends Constraint>(param: T): T { ... } | function loggingIdentity<T extends Lengthwise>(arg: T): T { console.log(arg.length); return arg; } |
| Default Type        | function functionName<T = DefaultType>(param: T): T { ... } | function createArray<T = string>(length: number, value: T): T[] { return Array(length).fill(value); } |
*/

//#endregion

