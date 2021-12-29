const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

export class MinHeap {
  constructor() {
    this.heap = []
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  insert(value) {
    if (value != null) {
      this.heap.push(value);
      // 上移操作
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  siftUp(index) {
    let parent = this.getParentIndex(index);
    // 如果父节点的值比插入的值大，交换两个值；直到堆的根结点也经过了交互节点和父节点位置的操作
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index)
    }
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

  findMiniNum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  // 移除最小值
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }

    const removedValue = this.heap[0];
    // 下沉操作
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }

  // 将堆的最后一个元素移动到根部。交换元素直到堆结构正常。
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (left < size && this.heap[element] > this.heap[left]) {
      element = left
    }
    if (right < size && this.heap[element] > this.heap[right]) {
      element = right
    }
    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element)
    }
  }
}