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