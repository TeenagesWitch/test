// 01
// Function that checks if two objects are equal.

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function isEqual2(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;

}

const obj1a = {
    a: "2",
    b: "1",
    c: "1",
    d: "1"
};

const obj1b = {
    a: "1",
    b: "1",
    c: "1",
    d: "1"
};

console.log(isEqual(obj1a, obj1b));
console.log(isEqual2(obj1a, obj1b));

// 02
// Function to get intersection of two objects

function getIntersection(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    const result = {};

    for (let key of keys1) {
        if (keys2.includes(key)) {
            result[key] = obj1[key];
        }
    }

    return result;
}

const obj2a = {
    a: "1",
    b: "1",
};

const obj2b = {
    a: "1",
    c: "3",
};

console.log(getIntersection(obj2a, obj2b));

// 03
// Function to merge two arrays and remove duplicates

function mergeArray(arr1, arr2) {
    const result = [...arr1];

    for (let item of arr2) {
        if (!result.some(resultItem => isEqual(resultItem, item))) {
            result.push(item);
        }
    }

    return result;
}

const arr3a = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' },
];

const arr3b = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' },
];

console.log(mergeArray(arr3a, arr3b));

// 04
// Function that can accept input as an array of objects and switch all values into property and property into value

function switchPropertyAndValue(arr) {
    const result = [];

    for (let item of arr) {
        const keys = Object.keys(item);
        const values = Object.values(item);

        const newItem = {};

        for (let i = 0; i < keys.length; i++) {
            newItem[values[i]] = keys[i];
        }

        result.push(newItem);
    }

    return result;
}

const arr4 = [
    { name: 'David', age: 20 },
    { name: 'John', age: 21 },
];

console.log(switchPropertyAndValue(arr4));