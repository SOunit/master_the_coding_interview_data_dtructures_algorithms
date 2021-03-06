class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];

    // hash table data structure
    // this.data = [
    //    // in case of collision
    //   [
    //     [key, value],
    //     [key, value],
    //   ],
    //    // no collision
    //   [[key, value]],
    // ];
  }

  // O(1) there's a loop here, but very well optimized in realty
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // O(1) most case it's O(1)
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
