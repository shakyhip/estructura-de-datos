class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    return this.queue;
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    console.log(this.queue);
  }

  front() {
    return this.queue[0];
  }

  back() {
    return this.cola[this.cola.length - 1]
  }

}

const queue = new Queue();
