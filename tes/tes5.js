// 01. buat 2 fungsi berbeda
function calculator(a, b) {
    return a + b;
}

function displayer(something) {
    console.log(something);
}

const res = calculator(1, 2);
displayer(res);

// 02. buat 1 fungsi yang menerima 2 fungsi lainnya

function newCalculator(a, b) {
    const res = a + b;
    displayer(res);
}

newCalculator(1, 2);

// 03. Menambahkan callback parameter pada fungsi

function betterCalculator(a, b, callback) {
    const res = a + b;
    callback(res);
}

function storeResult(result) {
    // simpan something ke file
}

betterCalculator(1, 2, displayer);
betterCalculator(1, 2, storeResult);
betterCalculator(1, 2, (result) => {
    console.log('Hasilnya adalah ' + result);
});