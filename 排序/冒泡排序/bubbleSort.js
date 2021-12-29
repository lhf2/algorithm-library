// 冒泡排序: 比较相邻的两个项，如果第一个比第二个大，则交换它们。
// 使用双循环：外层代表循环多少次（每循环一次只能确定一个正确的位置，最大值被排在了最后面）；内层进行交换；
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

function bubbleSort(array) {
  const {length} = array;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
  return array;
}
