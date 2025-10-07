// 'my-short-string' в 'myShortString'

function camelize(str) {
  let arr = str.split("-");
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let word = arr[i];
    result += word[0].toUpperCase() + word.slice(1);
  }
  return result;
}

let str = "my-short-string";
console.log(camelize(str));

/* Еще вариант 

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index > 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join("");
}

*/
