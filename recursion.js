//fibonacci
// const fib = (n) => {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   console.log(n)
//   return (fib(n - 1) + fib(n - 2));
// };

const reverse = (str) => {
  // let result;
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));

}

console.log(reverse('iuybiu'))