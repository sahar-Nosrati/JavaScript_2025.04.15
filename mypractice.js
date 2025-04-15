const repeatedFruts = [
  ["apple", 500],
  ["cherrry", 400],
  ["peach", 400],
  ["pear", 200],
  ["cherrry", 100],
  ["peach", 40],
  ["pear", 86],
];

const countNumberFruit = new Map(repeatedFruts);
console.log(countNumberFruit);


console.log(countNumberFruit.get("peach"));