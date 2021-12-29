// 基于数组实现的普通队列
export default class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0]
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