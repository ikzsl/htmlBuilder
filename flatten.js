const flatten = (coll) => {
  const result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      for(const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
 return result;
}

console.log([3, 2, [], [3, 4, 2], 3, [123, [3]]]);
let arr = [3, 2, [], [3, 4, 2], 3, [123, [3]]];
