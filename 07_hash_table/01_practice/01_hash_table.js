class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    // [[[key, value]], [[key, value]], [[key,value]]]
    if (this.data[address]) {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] == key) {
          return this.data[address][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }

    return keys;
  }
}

const hashTable = new HashTable(50);
hashTable.set("testkey1", "test value");
console.log(hashTable);
hashTable.get("testkey1");
console.log(hashTable.keys());
