// Project 1

function ageInDays(){
    var birthYear = prompt('What year were you born?');
    var result = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ result +' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    console.log(h1);
    document.getElementById('flex-box-result').appendChild(h1);
}