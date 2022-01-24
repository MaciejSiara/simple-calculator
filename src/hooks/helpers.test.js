import { calculateResult } from "./helpers";

const TEST_SCENARIOS = [
  [3, "+", 4, 7],
  [5, "-", 2, 3],
  [6, "*", 4, 24],
  [16, "/", 4, 4],
];

describe("test calculateResult", () => {
  test("should throw error when sign is invalid", () => {
    expect(() =>
      calculateResult({ firstValue: 1, secondValue: 2, sign: "abc" })
    ).toThrow(Error);
  });
  test.each(TEST_SCENARIOS)(
    "should return correct calculation result: %s %s %s = %s",
    (firstValue, sign, secondValue, result) => {
      const calcResult = calculateResult({ firstValue, secondValue, sign });
      expect(calcResult).toBe(result);
    }
  );
});
