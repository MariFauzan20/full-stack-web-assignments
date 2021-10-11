const arr = [1, 2, 3, 4, 5];
let i = 0;
let n = arr.length;

function searchInArray(arr, x, l, r) {
  if (r < l) {
    return -1;
  }

  if (arr[l] == x) {
    return l;
  }

  if (arr[r] == x) {
    return r;
  }

  return searchInArray(arr, x, l + 1, r - 1);
}

let indexPertama = searchInArray(arr, 6, i, n - 1);
i = 0;
let indexKedua = searchInArray(arr, 1, i, n - 1);
i = 0;
let indexKetiga = searchInArray(arr, 8, i, n - 1);

if (indexPertama != -1) {
  console.log(`angka ditemukan pada index: ${indexPertama}`);
} else {
  console.log("angka tidak ditemukan");
}

if (indexKedua != -1) {
  console.log(`angka ditemukan pada index: ${indexKedua}`);
} else {
  console.log("angka tidak ditemukan");
}
if (indexKetiga != -1) {
  console.log(`angka ditemukan pada index: ${indexKetiga}`);
} else {
  console.log("angka tidak ditemukan");
}
