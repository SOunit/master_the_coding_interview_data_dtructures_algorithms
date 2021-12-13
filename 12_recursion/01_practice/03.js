function recursive(count) {
  console.log(count);
  count--;
  if (count > 0) {
    recursive(count);
  }
}

recursive(10);
