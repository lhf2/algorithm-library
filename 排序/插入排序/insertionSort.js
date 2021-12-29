// 插入排序：假定第一项已经排序了，跟第二项比较确定位置，接着跟后面的比较，以此类推；

function insertionSort(array) {
  const {length} = array;
  let preIndex, current;
  for (var i = 1; i < length; i++) {
    preIndex = i - 1;
    current = array[i];
    while (preIndex >= 0 && array[preIndex] > current) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
}


function insertionSort(array) {
  const {length} = array;
  let temp;
  for (let i = 0; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--
    }
    array[j] = temp
  }

  return array;
}

module.exports = insertionSort;