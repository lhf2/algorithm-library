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

class Dictionary {
  constructor() {
    this.items = {}
  }

  hasKey(key) {
    return this.items[toStrFn(key)] != null
  }

  set(key, value) {
    if (key != null && value != null) {
      // 需要把 key 转化成字符串
      const newKey = toStrFn(key);
      // 不是只需要将 value 保存在字典中，还要保存原始的key
      this.items[newKey] = new ValuePair(key, value);
      return true
    }
    return false
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.items[toStrFn(key)];
      return true
    }
    return false
  }

  get(key) {
    if (this.hasKey(key)) {
      return this.items[toStrFn(key)]
    }
    return undefined;
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

  keyValues() {
    return Object.values(this.items)
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }

  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  toString() {
    if (this.isEmpty()) {
      return ""
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`
    }
    return objString;
  }

}