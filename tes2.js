const arr = new Array();
const arr2 = [];

const arrNum = [1, 2, 3, 4, 5];
console.log(arrNum[0]);
console.log(arrNum[1]);
console.log(arrNum[arrNum.length - 1]);

arrNum.pop();
console.log(arrNum);
arrNum.shift();
console.log(arrNum);

arrNum.push(5);
console.log(arrNum);
arrNum.unshift(1);
console.log(arrNum);

const text = "A puppy is really sad";
const words = text.split(" ");
const reverseWord = words.reverse();
const reverseText = reverseWord.join(" ");
console.log(reverseText);

function square(num) {
  return num * num;
}

function add(a, b) {
  return a + b;
}

console.log(square(2));
console.log(add(1, 2));

function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

function multiply(a, b) {
  function add(a, b) {
    return a + b;
  }
    let total = 0;
    for (let i = 0; i < b; i++) {
        total = add(a, total);
        }
    return total;
}

console.log(multiply(2, 3));

function greeting(name) {
  const defaultMessage = "Hello";
    return function (lang = "en") {
        let message = defaultMessage;
        if (lang === "it") {
            message = "Ciao";
        } else if (lang === "id") {
            message = "Halo";
        } else if (lang === "jp") {
            message = "Konnichiwa";
        }
        return `${message} ${name}`;
    }
}

const greeting1 = greeting("John");
const greeting2 = greeting("Jane");
const greeting3 = greeting("Doe");
const greeting4 = greeting("Smith");
console.log(greeting1("en"));
console.log(greeting2("id"));
console.log(greeting3("jp"));
console.log(greeting4("it"));

// Currying
function multiplier(factor) {
  return function (number) {
    return number * factor;
  }
}

const twice = multiplier(2);
console.log(twice(5));
console.log(multiplier(3)(5));

// Recursive function
function countdown(num) {
  if (num === 0) {
    console.log("Done!");
  } else {
    console.log(num);
    countdown(num - 1);
  }
}

countdown(5);

function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(7));

// arrow function
const square2 = (num) => {
  return num * num;
}

console.log(square2(2));

const adder = (a, b) => {
  return a + b;
}

console.log(adder(1, 2));

let myfruits = ["apple", "banana", "orange", "mango", "melon"];
// filter fruits that start with letter "m"
let filteredFruits = myfruits.filter((fruit) => {
  return fruit[0] === "m";
});
console.log(filteredFruits);
//map fruits to their length
let mappedFruits = myfruits.map((fruit) => {
  return fruit.length;
});

console.log(mappedFruits);