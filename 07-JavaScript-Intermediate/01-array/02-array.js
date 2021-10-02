const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  let sum = 0;
  let counter = 0;

  arr.forEach((item) => {
    sum += item;
  });

  arr.forEach((item) => {
    if (item > sum / arr.length) {
      counter++;
    }
  });

  return counter;
}

console.log(getAverage(arr1));
console.log(getAverage(arr2));
