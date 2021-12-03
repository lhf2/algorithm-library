// 基于数组实现的栈
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return !this.items.length
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }

  toString() {
    return this.items.toString();
  }
}