// 01
/* Given an array nums of size n, return the majority element. The majority element is the element
that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists
in the array */

function majorityElement(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
        if (map[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }
}

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));

// 02
// function to convert integer to roman numeral (fastest time complexity)

function intToRoman(num) {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];
    return ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];
}

console.log(intToRoman(3999));

// 03
// Given an integer numRows, return the first numRows of Pascal's triangle.

function generate(numRows) {
    const result = [];
    for (let i = 0; i < numRows; i++) {
        result[i] = [];
        result[i][0] = 1;
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result[i][i] = 1;
    }
    return result;
}

console.log(generate(5));
console.log(generate(1));

// 04
/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
● You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.
● Return the maximum profit you can achieve from this transaction. If you cannot achieve any
profit, return ÷. */

function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));