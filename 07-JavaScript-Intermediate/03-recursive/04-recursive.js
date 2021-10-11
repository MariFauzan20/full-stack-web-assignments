function trianglePattern(x, y) {
  if (x == 0) {
    return 0;
  } else {
    let blank = "";
    let i = 0;
    while (i < y) {
      if (i < x - 1) {
        blank += " ";
      } else {
        blank += String.fromCharCode(64 + (y - x + (i - x) + 2));
      }
      i++;
    }

    console.log(blank);

    return trianglePattern(x - 1, y);
  }
}

trianglePattern(5, 5);
