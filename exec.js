// 01
// Define width and length
const width = 10;
const length = 20;
// Calculate area
const area = width * length;
// Print area
console.log(area);

// 02
// Define width and length
const w = 10;
const l = 20;
// Calculate perimeter
const perimeter = 2 * (w + l);
// Print perimeter
console.log(perimeter);

// 03
// Define radius
const radius = 10;
// Calculate diameter using multiplication
const diameter = radius * 2;
// Calculate circumference using multiplication and PI
const circumference = diameter * Math.PI;
// Calculate area using exponentiation and PI
const Circlearea = radius ** 2 * Math.PI;
// Print diameter, circumference and area
console.log(diameter);
console.log(circumference);
console.log(Circlearea);

// 04
// Define angles
const angle1 = 30;
const angle2 = 60;
// Calculate third angle
const angle3 = 180 - (angle1 + angle2);
// Print third angle
console.log(angle3);

// 05
// Define two dates
const date1 = new Date('2000-04-20');
const date2 = new Date('2020-04-20');
// Calculate the difference in days
const diffInDays = (date2 - date1) / (1000 * 60 * 60 * 24);
// Print the difference in days
console.log(diffInDays);

// 06
// Define days, months, years
const days = 400;
// Convert days to years, months, and days
const years = Math.floor(days / 365); // Assume 365 days in a year and 30 days in a month
const months = Math.floor((days % 365) / 30); // Assume 30 days in a month
const remainingDays = days % 365 % 30;
// Print years, months and days
console.log(years);
console.log(months);
console.log(remainingDays);

