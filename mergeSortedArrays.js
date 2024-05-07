function mergeSortedArrays(arr1, arr2) {
  if (!arr1 || !arr2 || (arr1.length == 0 && arr2.length == 0)) {
    return false;
  }

  const concatinatedArray = arr1.concat(arr2);
  const valuesSet = new Set([]);
  for (let i = 0; i < concatinatedArray.length; i++) {
    //O(n)
    if (!valuesSet.has(concatinatedArray[i])) {
      valuesSet.add(concatinatedArray[i]);
    }
  }

  const result = [];

  valuesSet.forEach((value) => result.push(value)); //O(n)
  result.sort((a, b) => a - b); //O(log n)
  console.log(result);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); //O(n log n)
