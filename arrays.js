const arrays = (data) => {
  if (data.length === 0) {
      return null;
    }

  let max = 0;
  

  for (let i = 0; i < data.length; i += 1) {

    if (data[i].length === 0) {
      return null;
    }

    for (const temp of data[i]) {
      if (temp > max) {
        max = i;
        console.log(max, temp)
      }
    }
  }
  return max;
};

const data = [
  [-5, 7, 1],
  [3, 2, 13],
  [-1, -1, 10],
  [-1, -1, 12],
];

console.log(arrays(data));