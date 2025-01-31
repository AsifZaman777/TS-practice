
{/* tuple is a array with a predefined length and the types of the elements are known
    */}

let testTuple: [number, boolean, string];
testTuple = [1, true, 'Hello'];

console.log(testTuple);

//readonly tuple
const testTuple1: readonly [number, boolean, string] = [1, true, 'Hello'];
testTuple1.push(1); //error cant push to readonly array