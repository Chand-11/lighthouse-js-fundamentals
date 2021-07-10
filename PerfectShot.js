const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves){
  const parade = [0,0];
  for(const move of moves){
    //console.log(move);
    if (move ==='north'){
     parade[1] += 1;
    }
    if (move ==='south') {
      parade[1] -= 1;
    }
    if (move ==='east'){
      parade[0] += 1;
    }
    if (move ==='west' ){
      parade[0] -= 1;
    }
  }
 
return parade;
}

console.log(finalPosition(moves));