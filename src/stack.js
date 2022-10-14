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
class Stack {
  push(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let stack = [];
    stack[0] = element;
    return stack;
  }

  pop(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return element;
  }

  peek(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log(element)
  }
}

module.exports = {
  Stack
};
