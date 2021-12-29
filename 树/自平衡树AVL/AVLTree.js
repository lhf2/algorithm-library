import BinarySearchTree from "../二叉搜索树/BinarySearchTree";
import {Node} from "../二叉搜索树/BinarySearchTree";


// 平衡因子
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

// 任意一个节点的左子树和右子树高度最多相差1
class AVLTree extends BinarySearchTree {
  constructor() {
    super();
    this.root = null
  }

  // 计算节点高度
  getNodeHeight(node) {
    if (node == null) {
      return -1
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  // 计算一个节点的平衡因子
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED
    }
  }

  // 平衡操作 —— AVL旋转
  // 1. LL：抓着根结点大右旋
  // 2. RR：抓着根结点大左旋
  // 3. LR：先抓着左子树小左旋，在抓着根结点大右旋
  // 4. RL：先抓着右子树小右旋，在抓着根结点大左旋
  // LL型
  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp
  }

  // RR型
  rotationRR(node) {
    const temp = node.rigth;
    node.rigth = temp.left;
    temp.left = node;
    return temp
  }

  // LR型
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  // RL型
  rotationRL(node) {
    node.right = this.rotationLL(node.left);
    return this.rotationRR(node);
  }

  // 插入节点之后需要根据失衡类型调整平衡
  insert(key) {
    this.root = this.insertNode(this.root, key)
  }

  insertNode(node, key) {
    if (node == null) {
      return new Node(key)
    } else if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }
    // 调整平衡操作
    const balanceFactor = this.getBalanceFactor(node);
    // 左边失衡
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (key < node.left.key) {
        // LL失衡
        node = this.rotationLL(node);
      } else {
        // LR失衡
        node = this.rotationLR(node)
      }
    }
    // 右边失衡
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (key > node.right.key) {
        // RR失衡
        node = this.rotationRR(node);
      } else {
        // RL失衡
        node = this.rotationRL(node)
      }
    }
    return node
  }

  // 删除节点之后需要根据失衡类型调整平衡
  remove(key) {
    return this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node;
    }
    const balanceFactor = this.getBalanceFactor(node);
    // 左侧失衡
    if (balanceFactor == BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if(balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
        // LL
        return this.rotationLL(node);
      }
      if(balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
        // LR
        return this.rotationLR(node.left);
      }
    }
    // 右侧失衡
    if (balanceFactor == BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if(balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
        // RR
        return this.rotationRR(node);
      }
      if(balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
        // RL
        return this.rotationRL(node.right);
      }
    }
  }
}