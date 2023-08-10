class FoodOrderQueue {
    constructor() {
      this.queue = [];
      this.queueNumber = 1;
    }
  
    // Add an order to the queue
    addOrder(order) {
      this.queue.push(order);
    }
  
    // Print all data in the queue
    printQueue() {
      console.log('Orders in queue:', this.queue);
    }
  
    // Process all orders in the queue
    processOrders() {
      if (this.queue.length === 0) {
        console.log('All orders have been processed.');
        return;
      }
  
      const order = this.queue.shift();
      const processingTime = Math.floor(Math.random() * 10) + 1;
  
      setTimeout(() => {
        console.log(`Queue ${this.queueNumber} Done in ${processingTime} seconds.`);
        this.queueNumber += 1;
        this.processOrders(); // Continue processing the next order
      }, processingTime * 1000);
    }
  }

    module.exports = FoodOrderQueue;