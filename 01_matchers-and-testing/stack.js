// Lesson: Setup and Teardown
export class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
