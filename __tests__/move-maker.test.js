import { describe, test, expect, jest } from "@jest/globals";

import { validateMove, makeMove } from "../move-maker.js";

function newBoard() {
  return [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["O", "O", "X"],
  ];
}

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("validateMove", () => {
  test.each(["1,1", "1,3", "2,2", "3,3", "3,1"])("accepts %s", (move) => {
    expect(validateMove(move)).toBe(true);
  });

  test.each([
    ["0,1", "row below range"],
    ["4,1", "row above range"],
    ["1,0", "column below range"],
    ["1,4", "column above range"],
    ["2-1", "wrong separator"],
    ["1,2,3", "too many parts"],
    ["1", "too few parts"],
    ["a,b", "not numbers"],
    ["1.5,2", "not an integer"],
    ["", "empty string"],
  ])("rejects %s (%s)", (move) => {
    expect(validateMove(move)).toBe(false);
  });
});

describe("makeMove", () => {
  test("places the player's symbol in the chosen square", () => {
    const board = newBoard();
    expect(makeMove(board, "1,3", "O")).toBe(true);
    expect(board[0][2]).toBe("O");
  });

  test("uses row first and column second", () => {
    const board = newBoard();
    makeMove(board, "3,2", "O");
    expect(board[2][1]).toBe("O");
    expect(board[1][2]).toBe("_");
  });

  test("only changes the chosen square", () => {
    const board = newBoard();
    makeMove(board, "1,2", "X");
    expect(board).toEqual([
      ["X", "X", "_"],
      ["_", "X", "_"],
      ["O", "O", "X"],
    ]);
  });

  test("rejects an invalid format and leaves the board unchanged", () => {
    const board = newBoard();
    expect(makeMove(board, "0,1", "O")).toBe(false);
    expect(board).toEqual(newBoard());
  });

  test("rejects an occupied square and does not overwrite it", () => {
    const board = newBoard();
    expect(makeMove(board, "1,1", "O")).toBe(false);
    expect(board[0][0]).toBe("X");
  });

  test("prints 'Try again...' for a rejected move", () => {
    makeMove(newBoard(), "1,1", "O");
    expect(console.log).toHaveBeenCalledWith("Try again...");
  });
});
