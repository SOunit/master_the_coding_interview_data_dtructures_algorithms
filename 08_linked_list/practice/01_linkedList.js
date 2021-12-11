class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let target = this.head;

    let isKeep = true;
    while (isKeep) {
      if (!target.next) {
        target.next = { value, next: null };
        this.tail = { value, next: null };
        this.length++;

        isKeep = false;
      } else {
        target = target.next;
      }
    }
  }
}

const linkedList = new LinkedList(10);
console.log(linkedList);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
console.log(linkedList);
