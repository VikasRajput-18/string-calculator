export function add(numbers: string): number | string {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(Number);
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length) {
    return `negative numbers not allowed ${negatives.join(",")}`;
  }

  return nums.reduce((acc, num) => acc + num, 0);
}

console.log(add(""));
console.log(add("5"));
console.log(add("1,3"));
console.log(add("1,2,3,4"));
console.log(add("1\n2,\n3"));
console.log(add("//;\n1;2"));
console.log(add("1,-2,3,-4"));
