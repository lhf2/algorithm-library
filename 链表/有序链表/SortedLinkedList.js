import LinkedList from "../普通链表/LinkedList";


const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

function compare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class SortedLinkedList extends LinkedList {
  constructor() {
    super();
  }

  insert(element, index) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }

    // 计算元素应该插入的位置
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos)
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      // 循环链表找到第一个小于element的位置 就是它应该插入的位置
      const comp = compare(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next;

    }
    return i
  }
}