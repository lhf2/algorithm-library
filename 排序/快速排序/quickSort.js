// 快速排序：分而治之算法；选择一个值作为基准值，创建两个指针，左边的指向数组的第一个值，右边的指向数组最后一个值。移动左指针找到第一个大于基准值的值，移动右指针找到第一个小于基准值的值，交换。这样会使的小于基准值的值都在基准值的左边，大于的都在右边。重复这个过程；
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

function quickSort(array) {
  return quick(array, 0, array.length - 1);
}

function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    // 选择基准值的下标
    index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
  return array;
}

function partition(array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}