// 节点
export class Node {
  constructor(element) {
    // 节点值
    this.element = element;
    // next 指针
    this.next = undefined;
  }
}

export default class LinkedList {
  constructor() {
    // 节点数
    this.count = 0;
    // 头指针
    this.head = undefined;
  }

  push(element) {
    const node = new Node(element);
    let current;
    // 如果头指针为空 直接把新建的node指向头节点
    if (this.head == null) {
      this.head = node;
    } else {
      // 不为空
      current = this.head;
      while (current.next != null) {
        // 获得链表的最后一位 最后一位的next指向新节点
        current = current.next;
      }
      current.next = node
    }
    this.count++;
  }

  getElementAt(index) {
    // 检测临界值
    if (index >= 0 && index < this.count) {
      let node = this.head;
      // 循环迭代 index 次找到 index 所在的位置，返回其节点
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    } else {
      return undefined;
    }
  }

  removeAt(index) {
    // 检测临界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (current != null) {
        // 移除第一项
        if (index === 0) {
          // 直接修改 head 的指针即可
          this.head = current.next;
        } else {
          // 移除其他项 找到前一项和当前项 修改指针
          let previous = this.getElementAt(index - 1);
          current = previous.next;
          previous.next = current.next;
        }
        this.count--;
        return current.element;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  insert(element, index) {
    // 检测临界值
    if (index >= 0 && index < this.count) {
      const node = new Node(element);
      // 插入开头
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        // 插入其他位置 找到前一位跟当前位 修改指针
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    } else {
      return false
    }
  }

  indexOf(element) {
    // 循环整条链表 判断节点的值是否跟传入的值一致 一致的话返回下标
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (current.element === element) {
        return i
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0;
  }

  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next
    }
    return objString;
  }

  getHead(){
    return this.head;
  }
}

