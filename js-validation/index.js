function print(text) {
  console.log(text);
}

function isValid(name) {
  if (
    name !== null &&
    name !== "" &&
    name.indexOf(" ") === -1 &&
    name.length >= 4
  ) return true;

  return false;
}

function sayHello() {
  let userName = prompt("Введите ваше имя");
  console.log(typeof userName);

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}

sayHello();
