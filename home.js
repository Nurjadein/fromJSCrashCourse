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
 function add(num1,num2){
    console.log(num1+num2);
 }
 add(1,2);

//  Strings common methods
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

// Arrays
let fruits = ['Avocado', 'Mango', 'Watermelon', 'Banana'];
let veggies = ['Broccoli','Okra','Baguio Beans'];
let someNumbers = [6,3,2,9,7];
console.log(fruits);
console.log(fruits[0]);
fruits[0] = 'Apple';
console.log(fruits);

for (let i=0;i<fruits.length;i++){
   console.log([fruits[i]]);
}

// Array common methods
console.log('toString --> ', fruits.toString());
console.log('join --> ', fruits.join(' -> '));
console.log('pop --> ', fruits.pop(),' ',fruits);
console.log('push --> ', fruits.push('papaya'),' ',fruits);
console.log('shift --> ', fruits.shift(),' ',fruits); // remove first element
console.log('unshift --> ', fruits.unshift('Avocado'),' ',fruits); // add first element
let veggiesFruitsComb = fruits.concat(veggies);
console.log(veggiesFruitsComb);
console.log(veggiesFruitsComb.slice(1,5));
console.log(veggiesFruitsComb.reverse());
console.log(veggiesFruitsComb.sort());
console.log(someNumbers.sort()); //sort to ascending order by default
console.log(someNumbers.sort(function(a,b){return a-b})); //sort to ascending order
console.log(someNumbers.sort(function(a,b){return b-a})); //sort to descending order
