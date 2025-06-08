export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts[1];
  }

  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((acc, num) => acc + num, 0);
}

console.log(add(""));
console.log(add("5"));
console.log(add("1,3"));
console.log(add("1,2,3,4"));
console.log(add("1\n2,\n3"));
console.log(add("//;\n1;2"));
