// 01
// Define celsius
const celsius = 100;
// Calculate fahrenheit
const fahrenheit = celsius * 1.8 + 32;
// Print fahrenheit
console.log(fahrenheit);

// 02
// Define number
const number = 1234;
// Check if the number is odd or even
if (number % 2 === 0) {
    console.log('even');
}
else {
    console.log('odd');
}

// 03
// Define a number
const num = 1234;
// Check if the number is prime
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
// Print the result
if (isPrime) {
    console.log('prime');
}
else {
    console.log('not prime');
}

// 04
// Define a number
const num4 = 5;
// Calculate sum of 1 to num
let sum = 0;
for (let i = 1; i <= num4; i++) {
    sum += i;
}
// Print the result
console.log(sum);

// 05
// Define a number
const num5 = 5;
// Find factorial of num
let fact = 1;
for (let i = 1; i <= num5; i++) {
    fact *= i;
}
// Print the result
console.log(fact);

// 06
// Define a number
const num6 = 3;
// Print the first num6 fibonacci numbers
let num1 = 0, num2 = 1;
for (let i = 1; i <= num6; i++) {
    console.log(num1);
    const nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}