// 深度优先搜索：递归
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

// 1. 标注v为被发现的(灰色)
// 2. 对于v的所有未访问的（白色）邻点w，访问顶点w
// 3. 标注v为已被探索的(黑色)
const dfs = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      dfsSearchVisit(vertices[i], color, adjList, callback)
    }
  }
};

const dfsSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY;
  if (callback) {
    callback(u)
  }
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      dfsSearchVisit(w, color, adjList, callback)
    }
  }
  color[u] = Colors.BLACK;
};

export default dfs;