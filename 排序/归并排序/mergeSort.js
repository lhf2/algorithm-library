// 归并排序：分而治之算法；将原始数组切分成较小的数组，直到每个数组只有一个位置，接着将小数组归并成较大的数组；
// 第一种
function mergeSort(arr) {  // 采用自上而下的递归方法
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}


// 第二种
function mergeSort(array) {
  if (array.length > 1) {
    // 递归拆分
    const {length} = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    // 合并
    array = merge(left, right);
  }
  return array;
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }
  // 添加剩余项
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
