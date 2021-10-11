const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
let total = 0;

function sumOfArray(array) {
  if (array.length == 0) {
    return total;
  } else {
    total += array[0];
    array.shift();
    return sumOfArray(array);
  }
}

console.log(sumOfArray(arr1));
total = 0;
console.log(sumOfArray(arr2));
