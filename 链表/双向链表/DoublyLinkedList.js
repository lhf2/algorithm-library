import {Node} from "../普通链表/LinkedList";
import LinkedList from "../普通链表/LinkedList";

class DoublyNode extends Node {
  constructor(element, prev, next) {
    super(element, next);
    this.prev = prev;
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = undefined;
  }

  insert(element, index) {
    // 检测临界值
    if (index >= 0 && index < this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      // 插入开头
      if (index === 0) {
        // 如果链表是空的 头、尾节点都指向node
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          // 如果链表不为空 修改next prev指针
          node.next = current;
          current.prev = node;
          this.head = node;
        }
        // 如果在尾部添加节点
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        // 插入其他位置 找到前一位跟当前位 修改指针
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        current.prev = node;
        previous.next = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    } else {
      return false
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
          // 如果只有一项  更新tail
          if (this.size() == 1) {
            this.tail = undefined
          } else {
            this.head.prev = undefined;
          }
        } else if (index === this.count - 1) {
          // 移除最后一项
          current = this.tail;
          this.tail = current.prev;
          this.tail.next = undefined;
        } else {
          // 移除其他项 找到前一项和当前项 修改指针
          let previous = this.getElementAt(index - 1);
          current = previous.next;
          previous.next = current.next;
          current.next.prev = previous;
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
}