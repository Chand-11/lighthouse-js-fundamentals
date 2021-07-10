

function smartGarbage( Trash, bins){
  if(Trash === "recycling"){
    bins.recycling ++;
  }
  else if(Trash === "waste"){
    bins.waste ++;
  }
  else if(Trash === "compost"){
    bins.compost ++;
  }
return bins;
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

