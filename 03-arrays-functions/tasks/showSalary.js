let users = [
  {
    balance: "$1,825.65",
    picture: "https://placehold.it/32x32",
    age: 21,
    name: "Golden Branch",
    gender: "male",
    greeting: "Hello, Golden Branch! You have 7 unread messages.",
    favouriteFruit: "banana",
  },
  {
    balance: "$1,490.15",
    picture: "https://placehold.it/32x32",
    age: 25,
    name: "Duncan Randall",
    gender: "male",
    greeting: "Hello, Duncan Randall! You have 4 unread messages.",
    favouriteFruit: "apple",
  },
  {
    balance: "$2,305.75",
    picture: "https://placehold.it/32x32",
    age: 30,
    name: "Sophia Lee",
    gender: "female",
    greeting: "Hello, Sophia Lee! You have 2 unread messages.",
    favouriteFruit: "strawberry",
  },
  {
    balance: "$980.10",
    picture: "https://placehold.it/32x32",
    age: 19,
    name: "Alex Kim",
    gender: "male",
    greeting: "Hello, Alex Kim! You have 10 unread messages.",
    favouriteFruit: "grape",
  },
];

function showSalary(users, age) {
  return users
    .filter((item) => item.age <= age)
    .map((item) => item.name + ", " + item.balance)
    .join("\n");
}

console.log(showSalary(users, 24));
