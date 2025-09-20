const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const messages = document.querySelector("#messages");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  let errors = [];

  if (name.length < 4 || name.includes(" ")) {
    errors.push("Имя меньше четырёх символов или в нём есть пробел.");
  }

  if (!email.includes("@") || !email.includes(".")) {
    errors.push("Некорректный email.");
  }

  if (password.length < 6) {
    errors.push("Пароль меньше шести символов.");
  }

  if (password !== confirmPassword) {
    errors.push("Пароли не совпадают.");
  }

  if (errors.length > 0) {
    messages.className = "error";
    messages.textContent = errors.join(" ");
  } else {
    messages.className = "success";
    messages.textContent = "Регистрация успешна!";

    const user = { name, email };
    localStorage.setItem("registeredUser", JSON.stringify(user));
    console.log(
      "Сохранено в localStorage:",
      localStorage.getItem("registeredUser")
    );
  }
});

/*

имя ≥ 4 символа и без пробелов;

email содержит @ и .;

пароль ≥ 6 символов;

совпадение паролей.

*/
