import { Add, Substract, Multiplication } from "../Math";

test("Return sum of two arguments", () => {
  // Arrange
  let input = [4, 2];
  let expected = 6;
  // Act
  let result = Add(input[0], input[1]);
  // Assert
  expect(result).toBe(expected);
});

test("Return substraction of a - b", () => {
  // Arrange
  let input = [4, 2];
  let expected = 2;
  // Act
  let result = Substract(input[0], input[1]);
  // Assert
  expect(result).toBe(expected);
});

test("Return multiplication of two arguments", () => {
  // Arrange
  let input = [4, 2];
  let expected = 8;
  // Act
  let result = Multiplication(input[0], input[1]);
  // Assert
  expect(result).toBe(expected);
});
