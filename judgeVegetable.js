const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

function judgeVegetable(vegetables, metric){
  let max = 0;
  var sub;
  vegetables.forEach(v => { 
    var t = v.metric; 
    if (t > max) {
      max = t;
      sub = v.submitter;
    }
  });
  return sub;
}

const metric = 'redness';
console.log(judgeVegetable(vegetables, metric));
