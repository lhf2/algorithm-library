export class Node {
  constructor(key) {
    // 节点值
    this.key = key;
    // 左侧子节点引用
    this.left = null;
    // 右侧子节点引用
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    // 左子树的节点值小于根结点 右子树的节点值大于根结点
    if (node === null) return;
    if (node.key === key) return;
    if (key < node.key) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else if (key > node.key) {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  // 中序遍历 左-根-右
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  // 先序遍历 根-左-右
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  // 后序遍历 左-右-根
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  // 寻找最小值：沿着树的左边一直找
  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left
    }
    return current;
  }

  // 寻找最大值：沿着树的右边一直找
  max() {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right
    }
    return current;
  }


  // 搜索一个特定值：如果跟根节点的值相等，返回true。如果小于根结点的值，在左子树找；大于在右子树中找
  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node === null) {
      return false
    }
    if (key === node.key) {
      return true
    } else if (key < node.key) {
      return this.searchNode(node.left, key)
    } else {
      return this.searchNode(node.right, key)
    }
  }


  // 删除节点分为三种情况：
  // 1. 删除度为0的节点（叶节点）: 直接删除
  // 2. 删除度为1的节点（有一个左子树或右子树）：左或者右子树的值过继到当前节点
  // 3. 删除度为2的节点（有左右子树）：找到前驱或后继节点，覆盖删除节点的值，在更新左（前驱）右（后继）子树。
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) {
      return null
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node
    } else {
      // 1. 度为0的节点
      if (node.left == null && node.right == null) {
        node = null;
        return node
      }
      // 2. 度为1的节点
      if (node.left == null) {
        node = node.right;
        return node
      } else if (node.right = null) {
        node = node.left;
        return node
      }
      // 3. 度为2的节点 找到后继节点
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}