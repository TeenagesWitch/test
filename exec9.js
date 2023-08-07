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