// Exercise 01
const greeter = (myArr, counter) => { // created an arrow function that takes the array and counter
    let greetText = 'Hello'; // initilizing gretting text
    for(const x in myArr){ // looping the names as required 
        console.log(`${greetText} ${myArr[x]}`);  // displaying the names by using template literals
    } // closing the loop
};

greeter(['Randy savage', 'Ric Flair', 'Hulk Hogan'], 3); // default example on paper.
