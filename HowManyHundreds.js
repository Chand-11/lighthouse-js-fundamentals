function howManyHundreds(num)
{
 var count = 0;
  while(num >= 100)
  {
      count = count + 1;
      num = num - 100;
  }
  return count;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);