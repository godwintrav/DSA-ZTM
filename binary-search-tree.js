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
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value == currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let nodeToBeRemoved = null;
    while (currentNode && nodeToBeRemoved == null) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        nodeToBeRemoved = currentNode.value;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }

    const currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchR(queue, list);
  }

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }

  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }

  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }

  return list;
}

function traversePreOrder(node, list) {
  console.log(node.value);
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }

  if (node.right) {
    traversePreOrder(node.right, list);
  }

  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }

  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);

  return list;
}

//          9
//      4       20
//  1       6 15    170
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//          9
//      4       20
//  1       6 15    170
//BFS[9 ,4, 20, 1, 6, 15, 170]

//DFS[9, 4, 1, 6, 20, 15, 170]
//InOrder - [1,4,6,9,15,20,170]
//PreOrder - [9, 4, 1, 6, 20, 15, 170]
//PostOrder - [1, 6, 4, 15, 170, 20, 9]
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(20));
// console.log(tree.lookup(1));
// console.log(tree.lookup(170));
// console.log(tree.lookup(4));
//tree.breadthFirstSearch();
//console.log(tree.breadthFirstSearchR([tree.root], []));
console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//If you know a solution is not far from the root of the tree: BFS

//If the tree is very deep and solutions are rare: BFS (DFS will take long)

//If the tree is very wide: DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree: DFS

//Determining whether a path exists between two nodes: DFS

//Finding the shortest path: BFS

// [5,4,6,null,null,3,7]
//                     5
//             4                6
//         2        7        3         7

// [32,26,47,19,null,null,56,null,27]

//                                 32
//                             26      47
//                         19              56
//                             27

//                             3
//                                 30
//                             10
//                                 15
//                                     45
