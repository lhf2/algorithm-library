import LinkedList from "../链表/普通链表/LinkedList";

function toStrFn(item) {
  if (item == null) {
    return "NULL"
  } else if (item == undefined) {
    return "UNDEFINED"
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value
  }

  toString() {
    return `[${this.key}:${this.value}]`
  }
}

class HashTable {
  constructor() {
    this.items = {}
  }

  // 创建散列函数
  loseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    // 把key转成字符串 把每一位对应的code (ASCII码) 加起来对37取余
    const keyStr = toStrFn(key);
    let hash = 0;
    for (let i = 0; i < keyStr.length; i++) {
      hash += keyStr.charCodeAt(i)
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseHashCode(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      const pos = this.hashCode(key);
      this.items[pos] = new ValuePair(key, value);
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.items[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.items[hash];
    if (valuePair != null) {
      delete this.items[hash];
      return true
    }
    return false
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  isEmpty() {
    return this.size() === 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.items);
    let objString = `{${keys[0]} => ${this.items[keys[0].toString()]}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString}, {${keys[i]} => ${this.items[keys[i].toString()]}}`
    }
    return objString;
  }

  // 处理冲突的方法：
  // 1. 分离链接（拉链法）：每一个位置创建一个链表并将元素存储在里面
  put(key, value) {
    if (key != null && value != null) {
      const pos = this.hashCode(key);
      // 如果当前位置为空，创建一个新链表
      if (this.items[pos] === null) {
        this.items[pos] = new LinkedList();
      }
      this.items[pos].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const pos = this.hashCode(key);
    const linkedList = this.items[pos];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const pos = this.hashCode(key);
    const linkedList = this.items[pos];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.items[pos];
          }
          return true
        }
        current = current.next;
      }
    }
    return false;
  }

  // 2. 线性探查：如果 pos 位置被占，就尝试下一个位置；
  put(key, value) {
    if (key != null && value != null) {
      const pos = this.hashCode(key);
      if (this.items[pos] == null) {
        this.items[pos] = new ValuePair(key, value)
      } else {
        let index = pos + 1;
        while (this.items[index] != null) {
          index++;
        }
        this.items[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const pos = this.hashCode(key);
    if (this.items[pos] != null) {
      if (this.items[pos].key === key) {
        return this.items[pos].value
      }
      let index = pos + 1;
      while (this.items[index] != null && this.items[index].key !== key) {
        index++;
      }
      if (this.items[index] != null && this.items[index].key === key) {
        return this.items[index].value;
      }
    }
    return undefined;
  }

  remove(key) {
    const pos = this.hashCode(key);
    if (this.items[pos] != null) {
      if (this.items[pos].key === key) {
        delete this.items[pos];
        // 因为在不同的位置上可能有相同hash的元素 判断是否有副作用
        this.verifyRemoveSideEffect(key, pos);
        return true
      }
      let index = pos + 1;
      while (this.items[index] != null && this.items[index].key !== key) {
        index++;
      }
      if (this.items[index] != null && this.items[index].key === key) {
        delete this.items[index];
        this.verifyRemoveSideEffect(key, index);
        return true
      }
    }
    return false;
  }

  verifyRemoveSideEffect(key, removePos) {
    const hash = this.hashCode(key);
    let index = removePos + 1;
    while (this.items[index] != null) {
      const posHash = this.hashCode(this.items[index].key);
      // 如果当前hash值小于原始的hash值 或者 小于被删除的hash值 就把当前的移动到被删除的位置 然后删除当前值
      if (posHash <= hash || posHash <= removePos) {
        this.items[removePos] = this.items[index];
        delete this.items[index];
        removePos = index
      }
      index++;
    }
  }

  // 3. 双散列法
  // 4. 创建更好的散列函数
  djb2HashCode(key){
    const newKey = toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < newKey.length; i++){
      hash = (hash * 33) + newKey.charCodeAt(i)
    }
    return hash % 1013;
  }
}