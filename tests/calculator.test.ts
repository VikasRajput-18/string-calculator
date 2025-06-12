import { sumOfStringNumber } from "../src/calculator";

test("returns 0 for empty string", () => {
  expect(sumOfStringNumber("")).toBe(0);
});

test("returns number when one number is passed", () => {
  expect(sumOfStringNumber("5")).toBe(5);
});

test("returns sum of two comma-separated numbers", () => {
  expect(sumOfStringNumber("1,2")).toBe(3);
});

test("handles new lines between numbers", () => {
  expect(sumOfStringNumber("1\n2,3")).toBe(6);
});

test("supports custom delimiter", () => {
  expect(sumOfStringNumber("//;\n1;2")).toBe(3);
});
test("throws exception on negative numbers", () => {
  expect(() => sumOfStringNumber("1,-2,3,-4")).toThrow(
    new Error(`negative numbers not allowed -2,-4`)
  );
});
