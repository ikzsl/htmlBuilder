// const addDigits = (num) => {
//   if (num.length === 1) {
//     return num;
//   }
//   const summator = (x) => {
//     let summ = 0;
//     for (let i = 0; i < x.length; i += 1) {
//       summ += +(x[i]);
//     }
//     return summ;
//   }


//   let sum = summator(num);
//   if (sum.length > 1) {

//     sum = summator(sum);
//   }
//   return sum;
// }

// console.log(addDigits(10));

const summator = (x) => {
  let summ = 0;
  for (let i = 0; i < String(x).length; i += 1) {
    console.log("TCL: summator -> x.length", String(x).length)
    summ += +String(x)[i];
  }
  return summ;
}

console.log(summator(598997686567));
console.log(summator(85));