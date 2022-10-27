function isOdd(a) {
  if (a % 3 === 0) {
    return "true";
  } else if (a % 2 === 0) {
    return "false";
  }
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
