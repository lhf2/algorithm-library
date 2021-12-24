import LinkedList from "../普通链表/LinkedList";
import {Node} from "../普通链表/LinkedList";

class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }

  insert(element, index) {
    // 检测临界值
    if (index >= 0 && index < this.count) {
      const node = new Node(element);
      let current = this.head;
      // 插入开头
      if (index === 0) {
        // 如果链表是空的
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          // 如果链表不为空 修改next prev指针
          node.next = current;
          // 找到最后一个元素 更新 next 指针
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
        // 如果在尾部添加节点
      } else {
        // 插入其他位置 找到前一位跟当前位 修改指针
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
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
          // 如果只有一项
          if (this.size() == 1) {
            this.head = undefined;
          } else {
            const removed = this.head;
            current = this.getElementAt(this.size());
            this.head = this.head.next;
            current.prev = this.head;
            current = removed;
          }
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

}