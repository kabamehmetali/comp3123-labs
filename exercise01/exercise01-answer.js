
var str = "the quick brown fox"; // This is my default string

var new_string = []; // I innitilize a new string that stores the result.

var words = str.split(" "); // I split the words after an empty space so i can .....

for(x = 0; x < words.length; x++){ // I loop each word
    var word = words[x]; // I innitilize each word to the memory to manupulate them.
    word = word[0].toUpperCase() + word.slice(1); // I capitilaze the first case of the word and add the rest of the word by slice function.
    new_string += word + " "; // I combine back each word to my new strong
}
str = new_string; // I swap to update my old string with a completed new string.
console.log(str) // Result test
