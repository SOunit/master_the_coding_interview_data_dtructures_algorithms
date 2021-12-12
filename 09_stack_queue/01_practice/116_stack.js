class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    // new node
    const newNode = new Node(value);

    if (this.top) {
      // data exist
      this.top = newNode;

      let targetNode = this.bottom;
      while (targetNode.next) {
        targetNode = targetNode.next;
      }
      targetNode.next = newNode;
    } else {
      // data not exist
      this.top = newNode;
      this.bottom = this.top;
    }

    this.length++;
  }
  pop() {
    if(this.length <= 0){
      return;
    }

    if (this.length  === 1) {
      this.top = null;
      this.bottom = null;
      this.size = 0;
      return;
    }

    let targetNode = this.bottom;
    let count = 0;
    while (count < this.length - 2) {
      targetNode = targetNode.next;
      count++;
    }

    console.log(targetNode);
    targetNode.next = null;

    this.top = targetNode;
    this.length--;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);

//Discord
//Udemy
//google
