let message;

message = 'Hello'; // store the string

const number = 42; // store the number

const string = 'Hello'; // store the string

const isTrue = true; // store the boolean value

const nothing = null; // store the null valuekqkq

const empty = undefined; // store the undefined value

const sym = Symbol(); // store the symbol value

console.log(typeof empty)

const obj = {number: 2}; // store the object

const array = []; // store the array

const func = function() {}; // store the function

console.log(typeof obj.number);

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0)
                return true;
            else
                return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let a = null;
console.log(a);
console.log(isLeapYear(a));

let num = 14;
if (num >= 15) {
    console.log('The number is greater than or equal to 15');
}
else if (num >= 5) {
    console.log('The number is greater than or equal to 5');
} else if (num >= 12) {
    console.log('The number is greater than or equal to 9');
} else {
    console.log('The number is less than 5');
}

const str = 'java';
console.log(str === 'javascript' ? 'js' : 'not js');

for (let i = 5; i > 0; i--) {
    console.log(i);
}

let n = 5;
while (n > 0) {
    console.log(n);
    n--;
}