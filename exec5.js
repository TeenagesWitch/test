//01
// Function that removes odd numbers from an array and replaces them with even numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] = arr[i] + 1;
        }
    }
    return arr;
}
console.log(removeOdd(arr));

// 02
// function that insert integers into an array with a max size
function insertInt(maxSize, ...int) {
    let arr = [];
    for (let i = 0; i < maxSize; i++) {
        arr.push(int[i]);
    }
    return arr;
}
console.log(insertInt(5, 5, 10, 24, 3, 6, 7, 8));

// 03
// function that combine 2 arrays into 1
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];
function combineArr(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr.push(arr2[i]);
    }
    return arr;
}
console.log(combineArr(arr1, arr2));

// 04
// function to find duplicates in an array
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}
console.log(findDuplicates(arr4));

// 05
// function that find difference between 2 arrays
let arr5a = [1, 2, 3, 4, 5];
let arr5b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findDiff(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            arr.push(arr2[i]);
        }
    }
    return arr;
}
console.log(findDiff(arr5a, arr5b));

// 06
// function that return primitive data type from an array
let arr6 = [1, 'string', null, false, undefined, 2, 'yes', undefined];
function findPrimitive(arr) {
    let primitives = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object') {
            primitives.push(arr[i]);
        }
    }
    return primitives;
}
console.log(findPrimitive(arr6));

// 07
// function that return second largest number in an array
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
    }
    return secondLargest;
}
console.log(findSecondLargest(arr7));

// 08
// function that calculate sum of all numbers in a mixed data type array
let arr8 = [1, 2, 3, 4, 5, 'string', null, false, undefined, 2, '1', undefined];
function sumMixed(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumMixed(arr8));

// 09
// function that return the sum of duplicate numbers in an array
let arr9 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumDuplicates(arr) {
    let duplicates = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
    for (let i = 0; i < duplicates.length; i++) {
        sum += duplicates[i];
    }
    return sum;
}
console.log(sumDuplicates(arr9));

// 10
// Game of rock, paper, scissors where user input is compared to computer input and return the result
function rockPaperScissors(userInput) {
    let computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
        computerInput = "rock";
    } else if (computerInput === 1) {
        computerInput = "paper";
    } else {
        computerInput = "scissors";
    }
    let result = "";
    if (userInput === computerInput) {
        result = "Tie";
    } else if (userInput === "rock" && computerInput === "paper") {
        result = "You lose";
    } else if (userInput === "rock" && computerInput === "scissors") {
        result = "You win";
    } else if (userInput === "paper" && computerInput === "rock") {
        result = "You win";
    } else if (userInput === "paper" && computerInput === "scissors") {
        result = "You lose";
    } else if (userInput === "scissors" && computerInput === "rock") {
        result = "You lose";
    } else if (userInput === "scissors" && computerInput === "paper") {
        result = "You win";
    }
    return result;
}
console.log(rockPaperScissors("rock"));
console.log(rockPaperScissors("paper"));
console.log(rockPaperScissors("scissors"));