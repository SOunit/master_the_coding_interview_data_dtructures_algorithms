class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    this.length++;
  }

  printList() {
    const arr = [];

    let node = this.head;
    while (node !== null) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }

  // [5, 10, 15]
  insert(index, value) {
    // check params
    if (index === 0) {
      return this.prepend(value);
    }

    // get target node
    let targetNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      targetNode = targetNode.next;
    }

    // update target node
    const newNode = { value, next: targetNode.next };
    targetNode.next = newNode;
    this.length++;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(20);
linkedList.append(30);
linkedList.insert(0, 7);
linkedList.insert(1, 7);
linkedList.printList();
