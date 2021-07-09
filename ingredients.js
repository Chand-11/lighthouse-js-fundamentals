const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
var length1 = 0;
while(length1 < ingredients.length)
{
   console.log(ingredients[length1]);
   length1 = length1 +1;
 
}

// Write a for loop that prints out the contents of ingredients:

for ( var i=0; i< ingredients.length; i++)
{
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var i = ingredients.length;
while(i>=0)
{i--;
   console.log(ingredients[i]);
}