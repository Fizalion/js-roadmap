let inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";

function getMinMax(str) {
  let arr = str
    .split(" ")
    .filter((item) => isFinite(Number(item)))
    .sort((item1, item2) => Number(item1) - Number(item2));
  return { min: Number(arr[0]), max: Number(arr[arr.length - 1]) };
}

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }
