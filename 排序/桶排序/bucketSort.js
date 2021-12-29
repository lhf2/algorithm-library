// 桶排序：将元素分为不同的桶（较小的数组），再用一个简单的排序算法（比如插入排序），对每个桶进行排序。将所有的桶合并为结果数组
const insertionSort = require('../插入排序/insertionSort.js');

function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array
  }

  // 桶的数量
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets)
}

function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < array.length; i++) {
    // 把元素均匀的分配到桶中
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i])
  }
  return buckets;
}

function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray;
}

console.log(bucketSort([4, 2, 1, 3, 6, 7, 5, 9, 8]));