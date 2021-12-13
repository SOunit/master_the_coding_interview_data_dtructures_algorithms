//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (str.length === 1) {
    return str;
  }

  const lastChar = str.charAt(str.length - 1);
  const removedStr = str.substr(0, str.length - 1);

  return lastChar + reverseString(removedStr);
}

reverseString('yoyo mastery');
reverseString('apple');
//should return: 'yretsam oyoy'
