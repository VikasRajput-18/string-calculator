export function add(numbers: string): number {
  if (numbers === "") return 0;
  const numbersList = numbers.replace(/\n/g, ",");
  return numbersList
    .split(",")
    .map(Number)
    .reduce((acc, num) => acc + num, 0);
}

console.log(add(""));
console.log(add("5"));
console.log(add("1,3"));
console.log(add("1,2,3,4"));
console.log(add("1\n2,\n3"));
