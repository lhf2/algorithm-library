import Queue from '../队列/普通队列/queue_array.js'

// 广度优先搜索：队列
const Colors = {
  // 没被访问过
  WHITE: 0,
  // 被访问过，但未被探索
  GREY: 1,
  // 被访问过且被探索过
  BLACK: 2
};

const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

// 1. 创建一个队列Q
// 2. 将v入队列；
// 3. 如果Q非空:
//    - 将u从Q中出队列；
//    - 标注u为被发现的（灰色）
//    - 将u所有未被访问过的邻点（白色）入队列
//    - 标注u为已被探索过的 (黑色)

const bfs = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
    if (callback) {
      callback(u)
    }
  }
};

export default bfs;