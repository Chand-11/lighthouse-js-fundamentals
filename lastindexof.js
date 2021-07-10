function lastIndexOf(array , index)
{ var rindex = -1;
    for(var i = 0; i< array.length; i++)
    {
      if (array[i] === index)
      {
        rindex= i;
      }
    }
    return rindex;

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);