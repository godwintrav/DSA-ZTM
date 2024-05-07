let arrayReversed = [];
function reverseString(str) {
  if (arrayReversed.length == str.length) {
    return arrayReversed.join("");
  }

  arrayReversed.push(str[str.length - 1 - arrayReversed.length]);

  return reverseString(str);
}

console.log(reverseString("yoyo master"));
