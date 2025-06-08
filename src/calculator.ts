export function add(numbers: string): number {
  if (numbers === "") return 0;
  const numberArr = numbers.split(",").map(Number);
  return numberArr.reduce((acc, num) => acc + num, 0);
}

console.log(add(""));
console.log(add("5"));
console.log(add("1,3"));
