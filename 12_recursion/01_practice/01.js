// 5 + 4 + 3 + 2 + 1
const sum = (num) => {
  // return 5 + sum(5 - 1)
  //    return 4 + sum(4 - 1)
  //        return 3 + sum(3 - 1)
  //            return 2 + sum(2 - 1)
  //                return 1

  // return 5 + 4 + 3 + 2 + 1
  // return 4 + 3 + 2 + 1
  // return 3 + 2 + 1
  // return 2 + 1
  // return 1

  if (num === 1) {
    return num;
  }
  return num + sum(num - 1);
};

console.log(sum(5));
