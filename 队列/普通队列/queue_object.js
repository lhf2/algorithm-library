// 基于对象实现的普通队列
class Queue {
  constructor() {
    // 头部
    this.lowCount = 0;
    this.count = 0;
    this.items = {}
  }

  enqueue(element) {
    this.items[this.count++] = element;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowCount];
    delete this.items[this.lowCount];
    this.lowCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowCount]
  }

  isEmpty() {
    return this.count - this.lowCount === 0;
  }

  size() {
    return this.count - this.lowCount
  }

  clear() {
    this.lowCount = 0;
    this.count = 0;
    this.items = {}
  }

  toString() {
    if (this.isEmpty()) return "";
    let result = "";
    for (const key in this.items) {
      result += this.items[key] + ','
    }
    return result.slice(0, -1);
  }
}