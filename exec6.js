const students = [
    {
        name: "Nguyen Van A",
        email: "a@a.com",
        age: 18,
        score: 9
    },
    {
        name: "Nguyen Van B",
        email: "b@b.com",
        age: 19,
        score: 8
    },
];

const result = {
    score: {
        highest: 0,
        lowest: 0,
        average: 0
    },
    age: {
        highest: 0,
        lowest: 0,
        average: 0
    }
};

function getScoreAgeInfo(students) {
    let totalScore = 0;
    for (let student of students) {
        totalScore += student.score;
    }

    const averageScore = totalScore / students.length;
    return {
        highest: Math.max(...students.map(student => student.score)),
        lowest: Math.min(...students.map(student => student.score)),
        average: averageScore
    };
}

function getAgeInfo(students) {
    let totalAge = 0;
    for (let student of students) {
        totalAge += student.age;
    }

    const averageAge = totalAge / students.length;
    return {
        highest: Math.max(...students.map(student => student.age)),
        lowest: Math.min(...students.map(student => student.age)),
        average: averageAge
    };
}

function showInfo(students) {
    const scoreInfo = getScoreAgeInfo(students);
    const ageInfo = getAgeInfo(students);

    console.log(`Highest score: ${scoreInfo.highest}, Lowest score: ${scoreInfo.lowest}, Average score: ${scoreInfo.average}`);
    console.log(`Highest age: ${ageInfo.highest}, Lowest age: ${ageInfo.lowest}, Average age: ${ageInfo.average}`);
}

showInfo(students);

class Product {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showInfo() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}

class Transaction extends Product {
    total;
    quantity;

    constructor(name, price, quantity) {
        super(name, price);
        this.quantity = quantity;
        this.total = this.quantity * this.price;
    }

    // Add to cart function
    addToCart() {
        console.log(`Add ${this.quantity} ${this.name} to cart`);
    }

    // Show total function
    showTotal() {
        console.log(`Total: ${this.total}`);
    }

    // Checkout function
    checkout() {
        console.log(`Checkout ${this.total}`);
    }
}

const product = new Product("Iphone", 1000);
product.showInfo();

const transaction = new Transaction("Iphone", 1000, 2);
transaction.addToCart();
transaction.showTotal();
transaction.checkout();