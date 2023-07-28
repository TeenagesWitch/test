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