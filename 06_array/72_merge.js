// function mergeSortedArray(arr1, arr2) {
//   let arr = [...arr1, ...arr2];
//   return arr.sort((a, b) => a - b);
// }

function mergeSortedArray(arr1, arr2) {
  // let arr = [...arr1, ...arr2];

  let arr = [];
  arr1.forEach((element) => {
    arr.push(element);
  });
  arr2.forEach((element) => {
    arr.push(element);
  });

  // return arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      let item1 = arr[i];
      let item2 = arr[i + 1];
      if (item1 > item2) {
        let temp = item1;
        arr[i] = item2;
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}

mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
