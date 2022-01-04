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
function func(){
    alert('this is a function');
}
 func();