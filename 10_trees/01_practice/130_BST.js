class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    const newNode = new Node(value);

    // if root is empty
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let targetNode = this.root;

    let isKeep = true;
    while (isKeep) {
      if (targetNode.value < value) {
        if (!targetNode.right) {
          targetNode.right = newNode;
          isKeep = false;
        }
        targetNode = targetNode.right;
      } else {
        if (!targetNode.left) {
          targetNode.left = newNode;
          isKeep = false;
        }
        targetNode = targetNode.left;
      }
    }
  }
  lookup(value) {
    //Code here
    let targetNode = this.root;
    while (true) {
      // value not exist
      if (!targetNode) {
        return null;
      }
      // match
      if (targetNode.value === value) {
        return targetNode;
      }
      // check next
      if (targetNode.value < value) {
        targetNode = targetNode.right;
      } else {
        targetNode = targetNode.left;
      }
    }
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));
console.log(tree.lookup(1));
console.log(tree.lookup(9));
console.log(tree.lookup(20));
console.log(tree.lookup(200));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
