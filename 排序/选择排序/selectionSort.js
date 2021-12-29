// 选择排序：找到数据中的最小值放在第一位，接着找到第二小的值放在第二位，以此类推；
// 使用双循环：外层代表循环多少次（每循环一次只能确定一个正确的位置，最小值被排在了最前面）；内层从i开始循环找到最小值，进行交换；

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

function selectionSort(array) {
  const {length} = array;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if(array[j] < array[minIndex]){
        minIndex = j
      }
    }
    if(i !== minIndex){
      swap(array, i, minIndex);
    }
  }
  return array;
}
