// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  console.log(number);
  //code here
  if (number === 1) {
    return number;
  }
  number--;
  return (number + 1) * findFactorialRecursive(number);

  // 5
  // return (4 + 1) * r(4)
  // 4
  // return (3 + 1) * r(3)
  // return (3 + 1) * 6
  // 3
  // return (2 + 1) * r(2)
  // return (2 + 1) * 2
  // 2
  // return (1 + 1) * r(1)
  // return (1 + 1) * 1
  // 1
  // return 1
}

// function findFactorialIterative(number) {
//   //code here
//   let answer = 1;
//   for (let i = 0; i < number; i++) {
//     answer = answer * (i + 1);
//   }
//   return answer;
// }

// console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
