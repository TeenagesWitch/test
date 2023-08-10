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
  
    // Process the order in the queue
    processOrder() {
      return new Promise((resolve, reject) => {
        if (this.queue.length === 0) {
          reject('No orders in the queue.');
          return;
        }
  
        const order = this.queue.shift();
        const processingTime = Math.floor(Math.random() * 10) + 1;
  
        setTimeout(() => {
          resolve(`Queue ${this.queueNumber} Done in ${processingTime} seconds.`);
        }, processingTime * 1000);
      });
    }
  
    // Function to process all orders in the queue
    processAllOrders() {
      if (this.queue.length > 0) {
        this.processOrder()
          .then((message) => {
            console.log(message);
            this.queueNumber += 1;
            this.processAllOrders(); // Continue processing the next order
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log('All orders have been processed.');
      }
    }
  }

    module.exports = FoodOrderQueue;