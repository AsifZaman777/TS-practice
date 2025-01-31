//any : any type of value can be assigned to this variable by diusabling the type checking

let isTest = true;
isTest = 1; // Error: Type '1' is not assignable to type 'boolean'


let isTest1: any = true;
isTest1 = 1; // No Error



//unknown : similar to any but with type checking
let isTest2: unknown = true;
isTest2 = 1; // No Error
isTest2 = 'Hello'; // No Error


