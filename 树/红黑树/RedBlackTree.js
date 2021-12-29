import BinarySearchTree, {Node} from "../二叉搜索树/BinarySearchTree";

/*红黑树规则
1. 每个节点不是红的就是黑的
2. 根节点是黑色
3. 所有叶节点是黑的（用NULL引用表示的节点）
4. 如果一个节点是红的，那么它的两个子节点都是黑的。
5. 从给定节点到它的后代节点（NULL叶节点）所有路径都包含相同数量的黑色节点。*/
const Colors = {
  RED: 1,
  BLACK: 2
};

class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color = Colors.RED;
  }
}

class RedBlackTree extends BinarySearchTree {
  constructor() {
    super();
    this.root = null;
  }

  // LL型
  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    if (temp.right && temp.right.key) {
      temp.right.parent = node
    }
    temp.parent = node.parent;
    if (!node.parent) {
      this.root = temp
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp
      } else {
        node.parent.right = temp
      }
    }
    temp.right = node;
    node.parent = temp;
  }

  // RR型
  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    if (temp.left && temp.left.key) {
      temp.left.parent = node;
    }
    temp.parent = node.parent;
    if (!node.parent) {
      this.root = temp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp;
      } else {
        node.parent.right = temp;
      }
    }
    temp.left = node;
    node.parent = temp;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackTree(key);
      // 根节点是黑色
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node, key) {
    if (key < node.key) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left
      } else {
        return this.insertNode(node.left, key)
      }
    } else if (key > node.key) {
      if (node.right == null) {
        node.right = new RedBlackNode(key);
        node.right.parent = node;
        return node.right
      } else {
        return this.insertNode(node.right, key)
      }
    }
  }


  // 分为两种情况讨论
  // 1. 父节点的兄弟节点（叔节点）是红色：把父节点跟叔节点变为黑色，祖父节点变为红色
  // 2. 父节点的兄弟节点（叔节点）是黑色：LL RR LR RL
  fixTreeProperties(node) {
    // 父节点是不是红色，当前节点是不是黑色
    while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;
      // 1. 父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        // 叔节点是红色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 节点是右侧子节点 LR
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }
          // 节点是左侧子节点 LL
          this.rotationLL(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        // 父节点是右侧子节点
        const uncle = grandParent.left;
        // 叔节点是红色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 节点是左侧子节点 RL
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          // 节点是右侧子节点 RR
          this.rotationRR(grandParent);
          parent.color = Colors.RED;
          node = parent;
        }
      }

    }
    // 修改根节点的颜色
    this.root.color = Colors.BLACK;
  }
}