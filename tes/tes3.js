class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

let stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.pop());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());

class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

class Set {
  #container = [];

  add(element) {
    if (!this.has(element)) {
      this.#container.push(element);
    }
  }

  delete(element) {
    this.#container = this.#container.filter((el) => el !== element);
  }

  has(element) {
    return this.#container.includes(element);
  }

  get size() {
    return this.#container.length;
  }

  get values() {
    return this.#container;
  }
}

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(3);

console.log(set.values);
console.log(set.size);

class Map {
    #container = [];
    
    set(key, value) {
        const item = this.#container.find((el) => el.key === key);
    
        if (item) {
        item.value = value;
        } else {
        this.#container.push({ key, value });
        }
    }
    
    get(key) {
        const item = this.#container.find((el) => el.key === key);
    
        if (item) {
        return item.value;
        }
    
        return null;
    }
    
    delete(key) {
        this.#container = this.#container.filter((el) => el.key !== key);
    }
    
    get size() {
        return this.#container.length;
    }
    
    get keys() {
        return this.#container.map((el) => el.key);
    }
    
    get values() {
        return this.#container.map((el) => el.value);
    }
}

const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map.keys);
console.log(map.values);
console.log(map.size);

// Linked List

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
    this.head = null;
    this.size = 0;
    }

    add(element) {
        const node = new Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next !== null) {
            current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return false;
        }

        const node = new Node(element);

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous = null;
            let currentIndex = 0;

            while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
            }

            node.next = current;
            previous.next = node;
        }

        this.size++;
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return false;
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
            }

            previous.next = current.next;
        }

        this.size--;

        return current.element;
    }

    removeElement(element) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.element === element) {
            if (previous === null) {
                this.head = current.next;
            } else {
                previous.next = current.next;
            }

            this.size--;

            return current.element;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.element === element) {
            return index;
            }

            index++;
            current = current.next;
        }

        return false;
    }

    isEmpty() {
        return this.size === 0;
    }

    sizeOfList() {
        return this.size;
    }

    printList() {
        let current = this.head;
        let str = '';

        while (current !== null) {
            str += current.element + ' ';
            current = current.next;
        }

        return str;
    }

    getHead() {
        return this.head;
    }

    reverse() {
        let current = this.head;
        let previous = null;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;
    }

    reverseRecursive(node) {
        if (node === null || node.next === null) {
            this.head = node;
            return;
        }

        this.reverseRecursive(node.next);
        node.next.next = node;
        node.next = null;
    }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log(linkedList.printList());

linkedList.reverse();

console.log(linkedList.printList());

linkedList.reverseRecursive(linkedList.getHead());

console.log(linkedList.printList());

linkedList.insertAt(4, 3);

console.log(linkedList.printList());

linkedList.removeFrom(3);

console.log(linkedList.printList());

linkedList.removeElement(2);

console.log(linkedList.printList());

console.log(linkedList.indexOf(3));

console.log(linkedList.isEmpty());

console.log(linkedList.sizeOfList());