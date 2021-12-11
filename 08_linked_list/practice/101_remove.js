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

  // index=1
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let targetNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      targetNode = targetNode.next;
    }

    // targetNode=index0
    if (index > 0) {
      targetNode.next = targetNode.next.next;
    } else if (index === this.length - 1) {
      targetNode.next = null;
    }

    this.length--;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(20);
linkedList.append(30);
// linkedList.insert(1, 40);
// linkedList.remove(0);
linkedList.remove(2);
linkedList.printList();
