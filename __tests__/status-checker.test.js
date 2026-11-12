import { checkRow, checkColumn } from "../status-checker";

test("checkRow returns true when player X fills all three squares in a row", () => {
  const board = [
    ["X", "X", "X"],
    ["O", "_", "_"],
    ["_", "O", "_"],
  ];

  expect(checkRow(board, "X", 0)).toBe(true);
});

test("checkRow returns false when player X  hasn't filled all three squares in a row", () => {
  const board = [
    ["X", "O", "X"],
    ["O", "O", "_"],
    ["_", "X", "_"],
  ];
  expect(checkRow(board, "X", 0)).toBe(false);
});

test("checkRow returns true when player O has filled all three squares in a row", () => {
  const board = [
    ["X", "_", "_"],
    ["O", "O", "O"],
    ["X", "_", "_"],
  ];
  expect(checkRow(board, "O", 1)).toBe(true);
});

test("checkRow returns false when the row contains empty squares", () => {
  const board = [
    ["_", "_", "_"],
    ["O", "O", "_"],
    ["X", "_", "_"],
  ];
  expect(checkRow(board, "X", 0)).toBe(false);
});

test("checkColumn returns true when X fills all three squares in a column", () => {
  const board = [
    ["X", "O", "_"],
    ["X", "O", "_"],
    ["X", "_", "O"],
  ];

  expect(checkColumn(board, "X", 0)).toBe(true);
});

test("checkColumn returns false when X hasn't filled all three squares in a column", () => {
  const board = [
    ["X", "O", "_"],
    ["O", "X", "_"],
    ["X", "_", "O"],
  ];
  expect(checkColumn(board, "X", 0)).toBe(false);
});

test("checkColumn returns true when O fills all three squares in column 1", () => {
  const board = [
    ["X", "O", "X"],
    ["_", "O", "X"],
    ["X", "O", "O"],
  ];
  expect(checkColumn(board, "O", 1)).toBe(true);
});
