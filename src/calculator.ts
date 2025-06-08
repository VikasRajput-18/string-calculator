export function add(numbers: string): number {
  if (numbers === "") return 0;
  return parseInt(numbers);
}

console.log(add(""));
console.log(add("5"));
