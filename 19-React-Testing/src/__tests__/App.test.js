import { AddTodo } from "../components/helper";

test("Should add todo to the list", () => {
  // Arrange
  let input1 = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  let input2 = {
    id: 4,
    name: "Build page home",
    isComplete: false,
  };

  let input = [input2, ...input1];
  let expected = JSON.stringify(input);
  // Act
  let executed = AddTodo(input1, input2);
  let result = JSON.stringify(executed);

  // Assert
  expect(result).toBe(expected);
});

test("should not mutate the existing todo array", () => {
  // Arrange
  let input1 = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  let input2 = {
    id: 4,
    name: "Build page home",
    isComplete: false,
  };

  let expected = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  // Act
  AddTodo(input1, input2);
  const result = JSON.stringify(expected) === JSON.stringify(input1);

  // Assert
  expect(true).toBe(result);
});
