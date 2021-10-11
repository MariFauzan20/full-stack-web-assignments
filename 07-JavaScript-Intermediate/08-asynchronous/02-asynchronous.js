const isR18Plus = (age) => {
  let r18 = new Promise((resolve, reject) => {
    if (age > 18) {
      resolve("anda sudah dewasa");
    } else {
      reject("anda masih dibawah umur");
    }
  });

  return r18.then(
    (result) => result,
    (reject) => reject
  );
};

const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underAge);
  console.log(properAge);
};

printR18Plus();
