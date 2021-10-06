function getObjectValue(obj, path) {
  path = path.split(".");

  path.forEach((item) => {
    obj = obj[item];
  });

  if (obj == undefined) {
    return null;
  }

  return obj;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1,
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5,
    },
  },
};

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(
  milkBasedCoffee,
  "ingredients.espresso.brand"
);
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);
