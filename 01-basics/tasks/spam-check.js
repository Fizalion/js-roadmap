function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes("1xbet") || str.includes("xxx");
}

console.log(checkSpam("1XbeT now"));
