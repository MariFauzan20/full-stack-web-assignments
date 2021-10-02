const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse([...arrayNow]) {
  let start = 0;
  let end = arrayNow.length - 1;
  let temp;

  while (start < end) {
    temp = arrayNow[start];
    arrayNow[start] = arrayNow[end];
    arrayNow[end] = temp;

    start++;
    end--;
  }

  return arrayNow;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);
