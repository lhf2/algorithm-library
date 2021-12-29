# 使用JS来实现自己的算法库

## 栈
- [x] 添加元素：push(element)
- [x] 删除元素：pop()
- [x] 查看栈顶元素：peek()
- [x] 判空：isEmpty()
- [x] 元素个数：size()
- [x] 清空：clear()
- [x] 输出字符串：toString()


## 队列

### 普通队列
- [x] 添加元素：enqueue(element)
- [x] 删除元素：dequeue()
- [x] 查看队头元素：peek()
- [x] 判空：isEmpty()
- [x] 元素个数：size()
- [x] 清空：clear()
- [x] 输出字符串：toString()

### 双端队列
- [x] 队列前端添加元素：addFront(element)
- [x] 队列后端添加元素：addBack(element)
- [x] 队列前端删除元素：removeFront()
- [x] 队列后端删除元素：removeBack()
- [x] 返回队列前端元素：peekFront()
- [x] 返回队列后端元素：peekBack()
- [x] 判空：isEmpty()
- [x] 元素个数：size()
- [x] 清空：clear()
- [x] 输出字符串：toString()

### 普通链表
- [x] 向链表尾部添加元素：push(element)
- [x] 返回链表特定位置的元素：getElementAt(index)
- [x] 从链表特定位置移除一个元素：removeAt(index)
- [x] 向链表特定位置插入一个元素：insert(element, index)
- [x] 返回元素在链表的索引：indexOf(element)
- [x] 从链表中移除一个元素：remove(element)
- [x] 元素个数：size()
- [x] 判空：isEmpty()
- [x] 输出字符串：toString()

### 双向链表
- [x] 重写 向链表特定位置插入一个元素：insert(element, index)
- [x] 重写 从链表特定位置移除一个元素：removeAt(index)

### 循环链表
- [x] 重写 向链表特定位置插入一个元素：insert(element, index)
- [x] 重写 从链表特定位置移除一个元素：removeAt(index)

### 有序链表
- [x] 重写 向链表特定位置插入一个元素：insert(element, index)

### 集合
- [x] 判断集合中是否存在：has(element)
- [x] 添加元素：add(element)
- [x] 删除元素：delete(element)
- [x] 清空：clear()
- [x] 元素大小：size()
- [x] 包含集合中所有值的数组：values()
- [x] 并集运算：union(otherSet)
- [x] 交集运算：intersection(otherSet)
- [x] 差集运算：difference(otherSet)
- [x] 子集运算：isSubsetOf(otherSet)

### 字典
- [x] 判断是否存在：hasKey(key)
- [x] 添加元素：set(key,value)
- [x] 移除元素：remove(key)
- [x] 查值：get(key)
- [x] 清空：clear()
- [x] 元素大小：size()
- [x] 判空：isEmpty()
- [x] 所有键值对数组：keyValues()
- [x] 所有键名数组：keys()
- [x] 所有键值数组：values()
- [x] 迭代：forEach(callbackFn)
- [x] 输出字符串：toString()

### 散列表
- [x] 创建散列函数：hashCode(key)
- [x] 添加新项：put(key,value)
- [x] 查值：get(key)
- [x] 移除：remove(key)
- [x] 清空：clear()
- [x] 元素大小：size()
- [x] 判空：isEmpty()
- [x] 输出字符串：toString()

#### 解决冲突的几种方式：
1. 分离链接（拉链法）： 重写 put 、get 、remove
2. 线性探查：重写 put 、get 、remove
3. 双散列法
4. 创建更好的散列函数

### 二叉搜索树
- [x] 插入新的键：insert(key)
- [x] 中序遍历：inOrderTraverse()
- [x] 先序遍历：preOrderTraverse()
- [x] 后序遍历：postOrderTraverse()
- [x] 返回树中的最小值/键：min()
- [x] 返回树中的最大值/键：max()
- [x] 搜索一个特定的值：search(key)
- [x] 移除某个键：remove(key)

### AVL树
- [x] 插入新的键：insert(key)
- [x] 移除某个键：remove(key)

### 堆
#### 最小堆
- [x] 插入新的键：insert(value) 进行上移操作
- [x] 删除最小值：extract() 进行下沉操作
- [x] 元素大小：size()
- [x] 判空：isEmpty()
- [x] 查找堆中的最小值：findMiniNum()

### 排序
- [x] 冒泡排序：bubbleSort(array)
- [x] 选择排序：selectionSort(array)
- [x] 插入排序：insertionSort(array)
- [x] 希尔排序：shellSort(array)
- [x] 归并排序：mergeSort(array)
- [x] 快速排序：quickSort(array)
- [x] 堆排序：heapSort(array)
- [x] 计数排序：countingSort(array)
- [x] 桶排序：bucketSort(array)
- [x] 基数排序：radixSort(array)

### 图
- [x] 添加顶点：addVertex(v)
- [x] 添加边：addEdge(v, w)
- [x] 返回顶点列表：getVertices()
- [x] 返回邻接表：getAdjList(v, w)
- [x] 输出字符串：toString()
- [x] 广度优先搜索：bfs(graph, startVertex, callback)
- [x] 深度优先搜索：dfs(graph, callback)