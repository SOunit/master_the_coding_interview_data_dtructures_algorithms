(() => {
  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

  function bubbleSort(array) {
    for (let j = 0; j < array.length; j++) {
      console.log('j', j);
      for (let i = 0; i < array.length - j; i++) {
        let left = array[i];
        let right = array[i + 1];
        console.log(left, right);

        if (!right && right !== 0) {
          break;
        }

        if (left > right) {
          array[i] = right;
          array[i + 1] = left;
          console.log('swap');
        } else {
          console.log('no swap');
        }
      }
    }
  }

  bubbleSort(numbers);
  console.log(numbers);
})();
