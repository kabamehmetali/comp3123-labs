// Exercise 02

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join(''); 
// geting first letter and the rest of the letters by using rest operator as an input.
// than make the first letter uppercase and combine and stick together the rest of the code.

console.log(`${capitalize('fooBar')}`);   // example on paper
console.log(`${capitalize('nodeJS')}`);  // example on paper
