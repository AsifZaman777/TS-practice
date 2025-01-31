
// Types -> Implicit and Explicit

// Implicit
let userName = 'John Doe';
userName = 33;

console.log(userName);


// Explicit
let userAge: number = 33;
userAge = 'John Doe';

console.log(userAge);


//for both case we will get error for the type safety

