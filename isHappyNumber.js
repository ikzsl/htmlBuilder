const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// --------------------------------
const isHappyNumber = (num) => {
  let result = sumOfSquareDigits(num);
  let i = 0;
  while (i < 10) {
    result = sumOfSquareDigits(result);
    i += 1
  }
  return result === 1 ? true : false;
}

console.log(isHappyNumber(5));