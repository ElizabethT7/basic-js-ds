const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    //this.root = data;
      return this.rootTree;//root().data;
  }

  add(data) {
    this.rootTree = addWithin(this.rootTree, data);
      function addWithin(node, data) {
        if (!node) {
          return new Node(data);
        }
        
        if (node.data === data) {
          return node;
        }
        if (data < node.data) {
          node.left = addWithin(node.left, data);
        } else {
          node.right = addWithin(node.right, data);
        }

        return node;
      }      
  }

  has(data) {
    return searchWithin(this.rootTree, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data); 
    }
  }

  find(data) {
   return searchElement(this.rootTree, data);

    function searchElement(node, data) {
      if (!node) {
        return null;
      } else if(data < node.data) {
        return searchElement(node.left, data);
    } else if(data > node.data) {
        return searchElement(node.right, data);
    } else {
        return node;
      }
    }
  }

  remove(data) {
   this.rootTree = removeNode(this.rootTree, data);

   function removeNode(node, data) {
    if (!node) {
      return null; //точка остановки рекурсии
    }

    if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node; // в каждом шаге рекурсии получаем обновленное поддерево
    } else if (node.data < data) {
      node.right = removeNode(node.right, data);
      return node;
      } else { //значение одинаковое
          if (!node.left && !node.right) { //удаляем лист
            return null;
          }

          if (!node.left) { // у нашего дерева вместо элемента положили правое поддерево
            node = node.right;
            return node;
          }

          if (!node.right) {
            node = node.left;
            return node;
          }

          //есть оба поддерева
          let minFromRight = node.right; //начинаем с корня правого поддерева берем минимальный элемент
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          node.data = minFromRight.data;
          node.right = removeNode(node.right, minFromRight.data);
          return node;
      }
   }
  }

  min() {
    if (!this.rootTree) {
      return;
    }
    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootTree) {
      return;
    }
    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};