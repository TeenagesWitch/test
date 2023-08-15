// 01
//  Code to check if the date weekend or not

function isWeekend(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();

    if (day === 0 || day === 6) {
        return true;
    }
    return false;
}

console.log(isWeekend('Aug 13, 2023'));
console.log(isWeekend('Aug 12, 2023'));
console.log(isWeekend('Aug 11, 2023'));

// 02
//  Code to find GCD of two numbers. use while loop

function gcd(a, b) {
    let gcd = 1;
    let i = 1;
    while (i <= a && i <= b) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
        i++;
    }
    return gcd;
}

console.log(gcd(12, 13));

// 03
// Code to find LCM of two numbers. use do while loop

function lcm(a, b) {
    let lcm;
    let i = 1;
    do {
        lcm = a * i;
        i++;
    } while (lcm % b !== 0);
    return lcm;
}

console.log(lcm(16, 20));

// 04
// Code to find the most common character in a string

function mostCommonChar(str) {
    let max = 0;
    let maxChar = '';
    const charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostCommonChar('javascript'));

// 05
// Code to sort a string alphabetically

// Without using sort() method
function sortString(str) {
    let arr = str.split('');
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }
    return arr.join('');
}

console.log(sortString('javascript'));

// Using sort() method
function sortedString(str) {
    return str.split('').sort().join('');
}

console.log(sortedString('javascript'));

// 06
// Code to get minimum date from an array of dates


function minDate(dates) {
    let min = dates[0];
    for (let date of dates) {
        if (date < min) {
            min = date;
        }
    }
    return min;
}

console.log(minDate(['2015/02/01', '2015/02/02', '2015/01/03']));

// 07
// Code to calculate the sum of all elements in two dimensional array

function sumOfArray(arr) {
    let sum = 0;
    for (let subArr of arr) {
        for (let num of subArr) {
            sum += num;
        }
    }
    return sum;
}

console.log(sumOfArray([[1, 2], [3, 4, 5], [6, 7, 8, 9]]));

// 08
// Code to find the longest common prefix from an array of strings

function longestCommonPrefix(arr) {
    let prefix = '';
    let i = 0;
    while (true) {
        let char = arr[0][i];
        for (let str of arr) {
            if (str[i] !== char) {
                return prefix;
            }
        }
        prefix += char;
        i++;
    }
}

console.log(longestCommonPrefix(['javascript', 'java', 'jav']));

// 09
// Code that copies the first half of an array. With an odd number of elements, the middle element should still be copied.

function copyFirstHalf(arr) {
    let half = Math.ceil(arr.length / 2);
    return arr.slice(0, half);
}

console.log(copyFirstHalf([1, 2, 3, 4, 5, 6, 7]));

// 10
// Code to get number of days in a month

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(2, 2021));

// 11
// Code to count number of days passed since beginning of the year

function daysPassed(dateString) {
    const date = new Date(dateString);
    const firstDay = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((date - firstDay) / (1000 * 60 * 60 * 24)) + 1;
}

console.log(daysPassed('Dec 31, 2021'));

// 12
// Code to calculate age

function calculateAge(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const month = today.getMonth() - date.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
        age--;
    }
    return age;
}

console.log(calculateAge('Aug 13, 1999'));
console.log(calculateAge('Aug 18, 2000'));

// Add this line at the end of your file
module.exports = {
    isWeekend,
    gcd,
    lcm,
    mostCommonChar,
    sortString,
    sortedString,
    minDate,
    sumOfArray,
    longestCommonPrefix,
    copyFirstHalf,
    daysInMonth,
    daysPassed,
    calculateAge
};