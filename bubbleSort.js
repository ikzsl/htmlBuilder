const bubbleSort = (arr) => {
  let size = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < size; i += 1) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    size -= 1;
  } while (swapped);
  return arr;
};

console.log(bubbleSort([2, 66, 34, 98, 222, 3, 4, 5, 3, 4, 31, 96]))