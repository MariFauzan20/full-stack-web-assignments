const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

const avg1 = 3;
const avg2 = 7.2;

let total = 0;

function countAboveAvg(arr, avg) {
  if (arr.length == 0) {
    return total;
  } else {
    if (arr[0] >= avg) {
      total++;
    }
    arr.shift();
    return countAboveAvg(arr, avg);
  }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
total = 0;
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);
