// 基于对象实现的双端队列
class Deque {
  constructor() {
    // 头部
    this.lowCount = 0;
    // 尾部
    this.count = 0;
    this.items = {}
  }

  addFront(element) {
    // 1. 队列是空的
    if (this.isEmpty()) {
      this.addBack(element)
    }
    // 2. 一个元素已经从前端移除
    else if (this.lowCount > 0) {
      this.items[this.lowCount--] = element;
    }
    // 3. lowCount = 0 的情况
    else {
      // 所有的值往后移动（当i=1；原来0的位置变成了现在1的位置）
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count++] = element;
  }

  removeFront() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowCount];
    delete this.items[this.lowCount];
    this.lowCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return result;
  }

  peekFront() {
    return this.items[this.lowCount]
  }

  peekBack() {
    return this.items[this.count - 1]
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