// 01
// Define number
let number = 2;
// Create a for loop that counts from 0 to 10
for (let i = 0; i <= 10; i++) {
    result = number * i;
    console.log(number + " x " + i + " = " + result);
}

// 02
// Palindrome
let word = "racecar";
let reverseWord = "";
for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
}
if (word === reverseWord) {
    console.log(word + " is a palindrome");
}


// 03
let cm = 5;
km = cm / 100000;
console.log(km);

// 04
let curr = 1000000;
let currFormat = "";
let currStr = curr.toString();
let count = 0;
for (let i = currStr.length - 1; i >= 0; i--) {
    if (count === 3) {
        currFormat += ".";
        count = 0;
    }
    currFormat += currStr[i];
    count++;
}
let currFormatRev = "";
for (let i = currFormat.length - 1; i >= 0; i--) {
    currFormatRev += currFormat[i];
}
console.log("Rp " + currFormatRev + ",00");

// 05
let str = "hello world";
search_string = "ell";
// Delete first occurence of search_string
console.log(str.replace(search_string, ""));

// 06
let string = "hello world";
// Capitalize first letter of every word
let capString = "";
for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === " ") {
        capString += string[i].toUpperCase();
    } else {
        capString += string[i];
    }
}
console.log(capString);

// 07
let str1 = "hello world";
let revstr1 = "";
for (let i = str1.length - 1; i >= 0; i--) {
    revstr1 += str1[i];
}
console.log(revstr1);

// 08
let str2 = "hELLo WoRlD";
let swapstr2 = "";
for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str2[i].toUpperCase()) {
        swapstr2 += str2[i].toLowerCase();
    } else {
        swapstr2 += str2[i].toUpperCase();
    }
}
console.log(swapstr2);

// 09
let int1 = 5;
let int2 = 10;
if (int1 > int2) {
    console.log(int1);
}
else {
    console.log(int2);
}

// 10
let int3 = 5;
let int4 = 3;
let int5 = 4;
let sort = [int3, int4, int5];
// Conditional statement to sort integers in ascending order
if (sort[0] > sort[1]) {
    temp = sort[0];
    sort[0] = sort[1];
    sort[1] = temp;
}
if (sort[1] > sort[2]) {
    temp = sort[1];
    sort[1] = sort[2];
    sort[2] = temp;
}
if (sort[0] > sort[1]) {
    temp = sort[0];
    sort[0] = sort[1];
    sort[1] = temp;
}
console.log(sort);

// 11
let input = "hello world";
if (typeof input === "string") {
    console.log("1");
}
else if (typeof input === "number") {
    console.log("2");
}
else {
    console.log("3");
}

// 12
let input1 = "An apple a day keeps the doctor away";
let letter = "a";
let replace = "";
for (let i = 0; i < input1.length; i++) {
    if (input1.toLowerCase()[i] === letter.toLowerCase()) {
        replace += "*";
    }
    else {
        replace += input1[i];
    }
}
console.log(replace);