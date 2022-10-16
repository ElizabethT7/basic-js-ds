const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
let stackArr = [];
class Stack {
  
  push(element) {
    return stackArr.push(element)
  }

  pop() {
    let lastElement = stackArr[stackArr.length - 1]
    stackArr.pop()
    return lastElement
  }

  peek() {
    return stackArr[stackArr.length - 1]
  }
}

module.exports = {
  Stack
};
