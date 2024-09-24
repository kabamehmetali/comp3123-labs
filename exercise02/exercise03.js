// Exercise 03
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
// Getting the input and changing as in ghe question 02

const colours = ['red', 'green', 'blue']; // default array

const capitilizedColours = () => colours.map(capitalize); 
// capitilizing each element of the array and put it  back as an array.

console.log(capitilizedColours()); // displaying
