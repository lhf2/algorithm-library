import Dictionary from "../字典/Dictionary.js";

export default class Graph {
  constructor(isDirected = false) {
    // 是否有向 图分为有向图、无向图
    this.isDirected = isDirected;
    // 存储图中所有顶点名字
    this.vertices = [];
    // 存储邻接表 键：顶点名字 值：邻接顶点列表
    this.adjList = new Dictionary();
  }

  // 添加顶点
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  // 添加边 v跟w代表要连接的两个定点
  addEdge(v, w) {
    // 判断顶点v、w存不存在图中 不存在的话添加
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    this.adjList.get(v).push(w);
    // 如果是无向图 双向添加
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  // 返回顶点列表
  getVertices() {
    return this.vertices;
  }

  // 返回邻接表
  getAdjList() {
    return this.adjList
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}