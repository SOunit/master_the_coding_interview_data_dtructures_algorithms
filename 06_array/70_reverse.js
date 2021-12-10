function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("test"));
console.log(reverse("hello there"));

function reverse(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

console.log(reverse("test"));
console.log(reverse("hello there"));
