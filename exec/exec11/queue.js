class FoodOrderQueue {
    constructor() {
      this.queue = [];
    }
  
    // Add an order to the queue
    addOrder(order) {
      this.queue.push(order);
    }
  
    // Print all data in the queue
    printQueue() {
      console.log('Orders in queue:', this.queue);
    }
  
    // Process the order in the queue
    processOrder(queueNumber) {
      return new Promise((resolve, reject) => {
        if (this.queue.length === 0) {
          reject('No orders in the queue.');
          return;
        }
  
        const order = this.queue.shift();
        const processingTime = Math.floor(Math.random() * 10) + 1;
  
        setTimeout(() => {
          resolve(`Queue ${queueNumber} Done in ${processingTime} minutes.`);
        }, processingTime * 1000);
      });
    }
  }
  
    module.exports = FoodOrderQueue;