const FoodOrderQueue = require('./queue');

const foodQueue = new FoodOrderQueue();

// Adding orders to the queue
foodQueue.addOrder('Burger');
foodQueue.addOrder('Pizza');
foodQueue.addOrder('Salad');
foodQueue.addOrder('Sandwich');

// Print all data in the queue
foodQueue.printQueue();

// Start processing orders
foodQueue.processOrders();