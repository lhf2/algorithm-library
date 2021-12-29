// 希尔排序：缩小增量排序
// 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止。

function shellSort(array) {
  var len = array.length,
    temp,
    gap = 1;

  //动态定义间隔序列
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }


  // gap 后面越来越小 直到等于1
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = array[i];
      // 先处理所有初始gap间隔的位置调整
      for (var j = i - gap; j >= 0 && array[j] > temp; j -= gap) {
        array[j + gap] = array[j]
      }
      array[j + gap] = temp
    }
  }
  return array;
}