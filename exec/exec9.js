// 01
// function to convert excel sheet column to corresponding integer (fastest time complexity)

function excelColToInt(col) {
    let result = 0;
    for (let i = 0; i < col.length; i++) {
        result *= 26; // 26 letters in alphabet
        result += col.charCodeAt(i) - 64; // 64 is the ASCII value of 'A'
    }
    return result;
}
    
console.log(excelColToInt("AZ"));

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
// function to generate all combinations of parentheses (fastest time complexity)

function generateParenthesis(n) {
    const result = [];
    function generate(str, left, right) {
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        }
        if (left > 0) {
            generate(str + "(", left - 1, right);
        }
        if (right > left) {
            generate(str + ")", left, right - 1);
        }
    }
    generate("", n, n);
    return result;
}

console.log(generateParenthesis(3));

// 04
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one
// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

console.log(singleNumber([4,1,2,1,2]));

// 05
// Given two strings s and t, return true if t is an anagram of s, and false otherwise

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            return false;
        }
        map[t[i]]--;
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));

// 06
/* You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1
or 2 steps. In how many distinct ways can you climb to the top? */

function climbStairs(n) {
    const dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

console.log(climbStairs(2));
console.log(climbStairs(3));