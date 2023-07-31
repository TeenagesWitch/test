// 01
// Function that returns the highest, lowest, and average number from an array
// without sorting
let arr = [3, 2, 1, 4, 5, 6, 7, 8, 9];
function highestLowestAvg(arr) {
    let highest = arr[0];
    let lowest = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    let avg = sum / arr.length;
    return [highest, lowest, avg];
}
console.log(highestLowestAvg(arr));

// with sorting
function highestLowestAvgSort(arr) {
    let highest = arr[0];
    let lowest = arr[0];
    let sum = 0;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    let avg = sum / arr.length;
    return [highest, lowest, avg];
}
console.log(highestLowestAvgSort(arr));

// 02
// Function that takes an array of words and returns a string by concatenating them together
let arr2 = ["hello", "world", "how", "are", "you"];
function concatArr(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += "and " + arr[i];
            break;
        }
        str += arr[i] + ", ";
    }
    return str;
}
console.log(concatArr(arr2));

// 03
// Function that splits a string into an array of words
let str3 = "hello world how are you";
function splitStr(str) {
    let arr = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            arr.push(word);
            word = "";
            continue;
        }
        word += str[i];
    }
    arr.push(word);
    return arr;
}
console.log(splitStr(str3));

// 04
// Function that calculates each element in the same index from two arrays
let arr4a = [1, 2, 3, 4, 5];
let arr4b = [6, 7, 8, 9, 10];
function sumArr(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i] + arr2[i]);
    }
    return arr;
}
console.log(sumArr(arr4a, arr4b));

// 05
// Function that addds an element to the end of an array if it doesn't exist in the array
let arr5 = [1, 2, 3, 4, 5];
let arr6 = ["a", "b", "c", "d", "e"]
function addElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return arr;
        }
    }
    arr.push(element);
    return arr;
}
console.log(addElement(arr5, 5));
console.log(addElement(arr5, 6));
console.log(addElement(arr5, 6));
console.log(addElement(arr5, 7));
console.log(addElement(arr6, "e"));
console.log(addElement(arr6, 1));
