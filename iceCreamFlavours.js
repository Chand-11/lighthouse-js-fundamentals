const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];

console.log(iceCreamFlavours);
iceCreamFlavours.push("root beer")
console.log(iceCreamFlavours);
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[5]);
console.log(iceCreamFlavours.length);

let a = 3;
let b = 4;
b = a;
console.log(b);
const areMultiples  = function (bigNumber, smallNumber) {
  return bigNumber % smallNumber === 0;
}

console.log(areMultiples(15, 4));

