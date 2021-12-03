// 基于数组实现的双端队列
class Deque {
  constructor() {
    this.items = []
  }

  addFront(element) {
    this.items.unshift(element)
  }

  addBack(element) {
    this.items.push(element)
  }

  removeFront() {
    return this.items.shift();
  }

  removeBack() {
    return this.items.pop();
  }

  peekFront() {
    return this.items[0]
  }

  peekBack() {
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
    return this.items.toString()
  }
}