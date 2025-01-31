const names: string[] = ['Max', 'Manuel'];
names.push('Julia');
console.log(names);

// we can create readonly arrays
const privateNames: readonly string[] = ['Max', 'Manuel'];
privateNames.push('Julia'); //error cant push to readonly array




