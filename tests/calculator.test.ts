import { add } from "../src/calculator";

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number when one number is passed", () => {
  expect(add("5")).toBe(5);
});

test("returns sum of two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});
