var numbers = [100, 510, 440]; // I innitilize default numers to test the function

// I used anonymous function for it.
var max = function(...numbers){ // I use spread operator to get all the data that had been sent 
    return Math.max(...numbers); // I use max function in Math library and spread data in the function to get a result and return it.
};


console.log(max (1,0,1)); // default values that given to test
console.log(max (0,-10,-20)); // default values that given to test
console.log(max (1000,510,440)); // default values that given to test

console.log(max(...numbers)); // testing function here by using spread operator to spread array data one by one.

