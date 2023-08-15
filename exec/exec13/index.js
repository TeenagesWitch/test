
const {
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
} = require('./exec13.js');

// Test isWeekend
console.log(isWeekend('Aug 13, 2023')); // Should print true
console.log(isWeekend('Aug 12, 2023')); // Should print true
console.log(isWeekend('Aug 11, 2023')); // Should print false

// Test gcd
console.log(gcd(12, 13)); // Should print 1

// Test lcm
console.log(lcm(16, 20)); // Should print 80

// Test mostCommonChar
console.log(mostCommonChar('javascript')); // Should print 'a'

// Test sortString
console.log(sortString('javascript')); // Should print 'aacijprstv'
console.log(sortedString('javascript')); // Should also print 'aacijprstv'

// Test minDate
console.log(minDate(['2015/02/01', '2015/02/02', '2015/01/03'])); // Should print '2015/01/03'

// Test sumOfArray
console.log(sumOfArray([[1, 2], [3, 4, 5], [6, 7, 8, 9]])); // Should print 45

// Test longestCommonPrefix
console.log(longestCommonPrefix(['javascript', 'java', 'jav'])); // Should print 'jav'

// Test copyFirstHalf
console.log(copyFirstHalf([1, 2, 3, 4, 5, 6, 7])); // Should print [1, 2, 3, 4]

// Test daysInMonth
console.log(daysInMonth(2, 2021)); // Should print 28

// Test daysPassed
console.log(daysPassed('Dec 31, 2021')); // Should print 365 (because 2021 is not a leap year)

// Test calculateAge
console.log(calculateAge('Aug 13, 1999')); // Will print age depending on current year
console.log(calculateAge('Aug 18, 2000')); // Will also print age depending on current year
