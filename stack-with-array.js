class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("discord"));
console.log(myStack.peek());
