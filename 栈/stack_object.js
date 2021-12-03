// 基于对象实现的栈
class Stack {
  constructor() {
    this.count = 0;
    this.items = {}
  }

  push(element) {
    this.items[this.count++] = element;
  }

  pop() {
    if(this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if(this.isEmpty()) return undefined;
    return this.items[this.count - 1]
  }

  isEmpty() {
    return !this.count
  }

  size() {
    return this.count
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if(this.isEmpty()) return "";
    let result = "";
    for (const key in this.items) {
      result += this.items[key] + ','
    }
    return result.slice(0, -1);
  }
}