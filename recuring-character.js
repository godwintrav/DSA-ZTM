function recurringCharacter(arr) {
  if (arr.length <= 1) {
    return undefined;
  }

  let characterCount = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (characterCount.has(arr[i])) {
      return arr[i];
    } else {
      characterCount.set(arr[i], true);
    }
  } //O(n)
}

console.log(recurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
