 function range(start, end, step)
{
  var array1 = [];
  var empty = [];
  if(start > end || start == null || end == null || step <= 0)
  return empty;
  else
  {
    while(start <= end)  
    {
    array1.push(start);
    start = start + step;
    }
    return array1;
    }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));