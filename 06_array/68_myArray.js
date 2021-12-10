class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.push("hi"));
console.log(newArray.push("there"));
console.log(newArray.push("you"));
console.log(newArray.push("beautiful"));
console.log(newArray.push("people"));
console.log(newArray);
console.log(newArray.get(0));
// console.log(newArray.pop());
newArray.delete(1);
console.log(newArray);

const arr = [];
console.log(arr);
arr.push("hello");
arr.push("I");
arr.push("am");
arr.push("an");
arr.push("array!");
console.log(arr);
