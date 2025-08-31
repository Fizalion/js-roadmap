function factorial(n) {
  if (n == 0) return 1;
  let res = n;
  while (n > 1) {
    n -= 1;
    res *= n;
  }
  return res;
}

let n = 0;
console.log(factorial(n));
