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
}

class Transaction {
    cart = [];

    addtoCart(product, quantity) {
        if (!(product instanceof Product)) {
            return;
        }

        this.cart.push({
            product: product,
            quantity: quantity
        });
    }

    getCart() {
        // return name, price, quantity in string
        let result = "";
        for (let item of this.cart) {
            result += `\n${item.product.name} - ${item.product.price} - ${item.quantity}`;
        }

        return result;
    }

    showTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.product.price * item.quantity;
        }

        return total;
    }

    checkout() {
        console.log("Cart: ", this.getCart());
        console.log("Total: ", this.showTotal());
    }
}

const product1 = new Product("Iphone", 1000);
const product2 = new Product("Samsung", 2000);

const transaction = new Transaction();

transaction.addtoCart(product1, 2);
transaction.addtoCart(product2, 4);

transaction.checkout();