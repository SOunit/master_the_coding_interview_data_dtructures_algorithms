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
}

const linkedList = new LinkedList(10);
linkedList.append(20);
linkedList.append(30);
linkedList.printList();
