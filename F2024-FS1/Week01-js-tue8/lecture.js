// // let is local scope
// let n = 1;

// if(n === 1){
//     let n = 2;
//     console.log(n);
// }

// console.log(n);

// // var is global scope
// var foo = 'OUT';

// {
//     var foo = 'IN';
// }

// console.log(foo);


// let x = 10;
// let y = 100;

// // var x = 20;
// // var y = 200;

// // Const are blocked scoped much like variables defined using let statement. the value of  a constant   


// const voo = function() {
//     console.log("Original");
// }

// // voo = function(){
// //     console.log('Hijacked');
// // }

// voo();

// let oldCar = {
//     make : 'Toyota',
//     model : 'Tercel',
//     year : '1996'
// }

// for (let key in oldCar){
//     console.log(`${key} --> ${oldCar[key]}`);
// }

// let str = 'Turn the Page';


// for(let index in str){
//     console.log(`${index} => ${str[index]}`);
// }

// var elements = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];

// let data = elements.map(function(element){
//     return element.length;
// })

// let data2 = elements.map(element => {
//     return element.length;

// })

// let data3 = elements.map(element => element.length);

// let data4 = elements.map(({length}) =>  length);

// console.log(data);
// console.log(data2);
// console.log(data3);
// console.log(data4);

// const names = {car : 'Bob', dog: 'Fred', alligator : 'Benedic'};

// const {cat,dog,alligator} = names;

// console.log(cat);

// const namess = ['Bob', 'Fred','Benedic'];

// const [kedi,,timsah] = namess

// console.log(kedi);
// console.log();
// console.log(timsah);



// function add(x= 0 , y =3){
//     return x + y;
// }

// console.log(add());


// function add(x, y = 3 ){
//     console.log(x + y);
// }


// add(12, undefined);


// var mid = [3,4];
// var arr = [1,2,mid,5,6];

// console.log(arr);

// var arr = [1,2,...mid,5,6];
// console.log(arr);

// var arr = [2,4,6,8,0];

// var max = Math.max(...arr);

// console.log(max);


// var arr = [1,4,9,16];

// var map1 = arr.map(function(arr){
//     return arr * 2;
// });

// console.log(map1);

// var map2 = arr.map(x => x +1);

// console.log(map2);



// function Student(sid, name){
//     this.sid = sid;
//     this.name = name;
//     this.print = function(){
//         console.log(this.sid + " " + this.name);
//     }
 
// };

// // var m =Student.prototype.display = function() {
// //     console.log(this.sid + " " + this.name);
  
// // }

// var s = new Student(1,'Mehmet Ali');

// s.print();

// var language = {
//     set current(name){
//         this.log.push(name);
//     },
//     log: []
// };



// language.current = "EN";
// language.current = "TR";

// console.log(language.log);

// var languages = {
//     set current(name){
//         this.log.push(name);

//     },
//     log: []
// };


// languages.current = "TR";
// languages.current = "FR";

// console.log(languages.log);


var str = "the quick brown fox"; // This is my default string

var new_string = []; // I innitilize a new string that stores the result.

var words = str.split(" "); // I split the words after an empty space so i can .....

for(x = 0; x < words.length; x++){ // I loop each word
    var word = words[x]; // I innitilize each word to the memory to manupulate them.
    word = word[0].toUpperCase() + word.slice(1); // I capitilaze the first case of the word and add the rest of the word by slice function.
    new_string += word + " "; // I combine back each word to my new strong
}
str = new_string; // I update my old string with a manupulated string.
console.log(str) // Result test

