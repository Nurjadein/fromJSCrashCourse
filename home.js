// variables
var b = 'some variable';
var num = 30;

console.log(b);
console.log(num);

// grabbing element using their ID
document.getElementById('someText').innerHTML = 'This is a text';

// promt
var age = prompt('How old are you?');
if(age == null || age == '')
document.getElementById('addtionOfPromt').innerHTML = 'You cannot have an emty age.';
else
document.getElementById('addtionOfPromt').innerHTML = 'You are ' +age+ ' years old.';

// functions

// function func(){
//     alert('this is a function');
// }
//  func();

 function add(num1,num2){
    console.log(num1+num2);
 }
 add(1,2);

//  Strings
let sample = 'HoneyBee';
let sample2 = 'HoneyBee,LemonJuice,appleJuice';
console.log(sample.length);
console.log(sample.indexOf('n'));
console.log(sample.slice(1,6)); // param1 is the index of the start and param2 is the end of character from the starting character of the string 
console.log(sample.replace('Honey','Johnny'));
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
console.log(sample.charAt(4));
console.log(sample[4]);
console.log(sample2.split('')); //by character
console.log(sample2.split(',')); //by symbol(comma)

