import { add } from "../src/calculator";

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number when one number is passed", () => {
  expect(add("5")).toBe(5);
});
