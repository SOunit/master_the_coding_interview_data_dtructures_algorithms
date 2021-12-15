const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  // from 1 to end
  for (let i = 1; i < array.length; i++) {
    let numHolder = array[i];
    for (let j = i - 1; j >= 0; j--) {
      let left = array[j];
      if (numHolder < left) {
        array[j + 1] = left;
        array[j] = numHolder;
      } else {
        break;
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
