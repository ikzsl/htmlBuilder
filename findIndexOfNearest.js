const findIndexOfNearest = (arr, num) => {
  let nearest = 0;
  let nearestIndex = 0;
  arr.forEach((el, i) => {
    if (el - num >= 0 ) {
      nearest = el;
      nearestIndex = i;
    }
  })

  return nearestIndex;
}



const q = findIndexOfNearest([7, 5, 4, 4, 3], 4); 
console.log("TCL: q ", q )