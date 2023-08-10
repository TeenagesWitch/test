const FoodOrderQueue = require('./queue');

const foodQueue = new FoodOrderQueue();

// Adding orders to the queue
console.log('Add orders to queue');
foodQueue.addOrder('Burger');
foodQueue.addOrder('Pizza');
foodQueue.addOrder('Salad');
foodQueue.addOrder('Sandwich');

// Print all data in the queue
foodQueue.printQueue();

// Function to process all orders in the queue
const processAllOrders = (queueNumber = 1) => {
  if (foodQueue.queue.length > 0) {
    foodQueue.processOrder(queueNumber)
      .then((message) => {
        console.log(message);
        processAllOrders(queueNumber + 1); // Continue processing the next order
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log('All orders have been processed.');
  }
};

// Start processing orders
processAllOrders();
