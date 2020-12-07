
alert('hello!');

document.getElementById('test').style.fontSize = '80px';
document.getElementById('test').style.color = 'red';
document.getElementById('bobo').style.backgroundColor = 'blue';

function see() {
    document.write('hello world')
    
};

document.getElementById('test').innerHTML = 'The document has been changed'

console.log('whats the error?')
console.log('6 * 8')



var y = 9;
alert(y);

var name = 'Onyi'
console.log(Name);

var amount;
var nothing = null;
///////////////////////////////////////////////
var car = {name : 'toyota',
            model: 'corola',
            year: 2020,
            color: 'black'};
console.log('i have a' + car.name + '' + car.model + 'and it is' + car.color + 'in color' )

////////////////////////////////////////////////
var x = '5';
var y = '19';
var z = x+y;
alert(z);
Array
var fruits = ['banana,' 'pineapple', 'apple', 'orange'];
alert(fruits[0]);

/////////////////////////////////////////////////
var userName = prompt('what is your name');
var age = prompt('what is your age');
if (age > 18) {
    alert('Welcome')
    document.getElementById('usernqame').innerHTML = userName;    

} else{
        alert('go home')
}        

///////////////////FUNCTIONS/METHODS//////////////////////////////////////
function productPrice(numberOfProduct, price) {
    var amount = numberOfProduct * price
    alert(amount)
}

productPrice(4, 500)
//////////////////////////////////////////////////////
function convertMinToSec(mins) {
    var answer = mins * 60
    alert(answer)
}

convertMinToSec(40)
///////////////////////////////////////////////////////

switch (6) {
    case 1 :
        text : 'weekend';
        break;
        case 2 :
        text : 'weekend';
        break;
        case 3 :
        text : 'weekend';
        break;
        case 4 :
        text : 'weekend';
        break;
        case 5 :
        text : 'weekend';
        break;
        case 6 :
        text : 'weekend';
        break;
        case 7 :
        text : 'weekend';
        break;
        default:
             text : 'weekday';
        
}

console.log(text);
//////////////////////////////////////////////











