
//casting with <>

let creditCardUser: unknown = 'Hello';
let creditCardUserString = <string>creditCardUser;
console.log(typeof creditCardUserString);

//casting with as
let creditCardUser2: unknown = 'Hello';
let creditCardUserString2 = creditCardUser2 as string;
console.log(typeof creditCardUserString2);

//Force casting

let age:string= '46';
let ageNumber:number = (age as unknown) as number;
console.log(typeof ageNumber); // still string because the value is not a number

{
    /*
    double assertion problem: Typescript does not allow double assertion to avoid runtime errors.
    */
}


let amount = '100';
let amountNumber: number = Number(amount);
console.log(typeof amountNumber); // logs number

