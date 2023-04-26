class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const removed = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return removed;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return (this.count - this.lowestCount) === 0;
  }

  size() {
    return this.count - this.lowestCount
  }

  printSelf() {
    return this;
  }
}

// bellow are some tests cases to make sure its is working

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(6);

const self = queue.printSelf();

console.log({ self })

const dequeued = queue.dequeue();

const size = queue.size();

const self2 = queue.printSelf();

console.log({ dequeued })
console.log({ size })
console.log({ self2 })
