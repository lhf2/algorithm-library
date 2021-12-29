// 基数排序：根据数字的有效位或基数将整数分布到桶中; 将整数按位数切割成不同的数字，然后按每个位数分别比较；

function findMinValue(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min;
}

function findMaxValue(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max;
}

/*
function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array
  }
  const minValue = findMinValue(array);
  const maxValue = findMaxValue(array);

  // 先从个位数开始排序
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    // 对十位数、百位数等等..
    significantDigit *= radixBase;
  }
  return array;
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  // 基于基数初始化桶
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }

  // 进行计数排序
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    buckets[bucketsIndex]++;
  }
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }

  // 计数完成后，开始将值移回原始数组中
  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    aux[--buckets[bucketsIndex]] = array[i]
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i]
  }
  return array;
}*/


var counter = [];

// 计算最大基数 比如最大值是78的话 两位数 最大基数就是2
function getMaxDigit(arr) {
  var maxValue = findMaxValue(arr);
  if (maxValue == 0) {
    return 1
  }
  return parseInt(maxValue).toString().length;
}

function radixSort(arr) {
  var mod = 10;
  var dev = 1;
  var maxDigit = getMaxDigit(arr);
  for (var i = 0; i < maxDigit; i++) {
    for (var j = 0; j < arr.length; j++) {
      // 先处理个位数
      var bucket = parseInt((arr[j] % mod) / dev);
      // 计数排序
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    // 先按个位数的大小排序
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
    // 处理十位数、百位数
    dev *= 10;
    mod *= 10
  }
  return arr;
}

// console.log(radixSort([4, 2, 53, 13, 67, 23, 6, 3]));
// console.log(radixSort([4, 2, 53, 133, 67, 213, 6, 3]));
console.log(radixSort([4, 2, 3, 1, 6, 9, 8, 10]));
