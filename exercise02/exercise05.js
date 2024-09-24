// Exercise 05 
const array = [1, 2, 3, 4]; // default array

const calculateSum = () => array.reduce((sum, num) => sum + num, 0); 
// calculating sum by using reduce function
const calculateProduct = () => array.reduce((product, num) => product * num, 1); 
// calculating product by using reduce function

console.log(calculateSum());  // displaying the sum 
console.log(calculateProduct());  // displaying the rest