const nemo = ["nemo"];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "nemo") {
      console.log("Found NEMO!");
    }
  }
  const t1 = performance.now();
  console.log("time " + (t1 - t0));
}

findNemo(large);
