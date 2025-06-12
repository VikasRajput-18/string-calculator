function parseStringNumberToInteger(numbers: string) {
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts[1];
  }
  return numbers.split(delimiter).map(Number);
}

function validateNegativeNum(nums: number[]) {
  const negatives = nums.filter((n: number) => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
}

export function sumOfStringNumber(numbers: string): number {
  if (numbers === "") return 0;

  const nums = parseStringNumberToInteger(numbers);
  const filteredNumbers = nums.filter((n) => n < 1000);
  validateNegativeNum(filteredNumbers);
  return filteredNumbers.reduce((acc, num) => acc + num, 0);
}
