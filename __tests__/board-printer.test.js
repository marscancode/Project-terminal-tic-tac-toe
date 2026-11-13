import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("checkIfNoMovesLeft should return false if there are moves left", () => {
  const board = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["O", "O", "X"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});