// 计数排序：使用一个用来存储每个元素在原始数组中出现次数的临时数组
function findMaxValue(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max;
}

function countingSort(array) {
  if (array.length < 2) {
    return array
  }
  // 找到数组中的最大值
  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1);
  // 计数数组：数组下标对应的是元素值，数组值对应的是次数
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  // 上面的counts已经排好序了，循环依次打印出
  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });
  return array;
}
