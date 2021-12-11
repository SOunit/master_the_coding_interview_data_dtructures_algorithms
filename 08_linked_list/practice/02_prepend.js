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
}

const linkedList = new LinkedList(10);
linkedList.append(20);
linkedList.append(30);
console.log(linkedList);
linkedList.prepend(0);
console.log(linkedList);
