class Set {
  constructor() {
    this.items = {}
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true
    }
    return false;
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  // 并集运算
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => {
      unionSet.add(value)
    });
    otherSet.values().forEach(value => {
      unionSet.add(value)
    });
    return unionSet;
  }

  // 交集运算
  intersection(otherSet) {
    const intersectionSet = new Set();
    this.values().forEach(value => {
      if (!!otherSet.has(value)) {
        intersectionSet.add(value)
      }
    });
    return intersectionSet
  }

  // 差集运算
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    });
    return differenceSet
  }

  // 一个集合是否是另一个集合的子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false
      }
      return true
    });
    return isSubset;
  }
}
