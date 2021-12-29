// 堆排序：
// 1. 用数组创建一个大顶堆；
// 2. 最大的值会被存储在堆的第一个位置，将它替换为堆的最后一个值，将堆的大小减1；
// 3. 将堆的根结点下移并重复2直到堆的大小为1；

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}


var len;

// 创建大顶堆
function buildMaxHeap(array) {
  len = array.length;
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i)
  }
}

// 堆调整
function heapify(array, i) {
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && array[left] > array[largest]) {
    largest = left
  }
  if (right < len && array[right] > array[largest]) {
    largest = right
  }
  if (largest != i) {
    swap(array, i, largest);
    heapify(array, largest);
  }

}

function heapSort(array) {
  // 创建大顶堆
  buildMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    len--;
    heapify(array, 0);
  }
  return array;
}
