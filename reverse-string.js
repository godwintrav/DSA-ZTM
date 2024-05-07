function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return false;
  }
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    // reversedString = `${reversedString}${str[i]}`;
    reversedString += str[i];
  }

  console.log(reversedString);
}

reverse("My Niggas");
