const arr = [[10], [9, 7, 1], [2, 8]];

function searchInArray(arr, x) {
  let concatArray = [].concat(...arr);
  for (let i = 0; i < concatArray.length; i++) {
    if (x == concatArray[i]) {
      return i;
    }
  }

  return null;
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
