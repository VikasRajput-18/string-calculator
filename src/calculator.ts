function parseStringNumberToInteger(numbers: string) {
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts[1];
  }
  const nums = numbers.split(delimiter).map(Number);
  return nums;
}

function validateNegativeNum(nums: number[]) {
  const negatives = nums.filter((n: number) => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
}

export function sumOfStringNumber(numbers: string): number {
  if (numbers === "") return 0;

  let nums = parseStringNumberToInteger(numbers);
  validateNegativeNum(nums);

  return nums.reduce((acc, num) => acc + num, 0);
}


