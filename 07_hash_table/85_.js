const test = (arr) => {
  const obj = {};
  for (elem of arr) {
    if (obj[elem]) {
      return elem;
    } else {
      obj[elem] = elem;
    }
  }
  return undefined;
};

test([2, 5, 1, 2, 3, 5, 1, 2, 4]);
test([2, 1, 1, 2, 3, 5, 1, 2, 4]);
test([2, 1, 8, 7, 3, 5, 9, 10, 4]);
