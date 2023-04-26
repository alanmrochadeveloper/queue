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
    delete this.items[this.lowesCount];
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
}
