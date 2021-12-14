const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let smallestNumIndex = 0;
  for (let j = 0; j < array.length; j++) {
    for (let i = 0 + j; i < array.length; i++) {
      if (array[i] < array[smallestNumIndex]) {
        smallestNumIndex = i;
      }
    }
    // swap
    let temp = array[j];
    array[j] = array[smallestNumIndex];
    array[smallestNumIndex] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);
