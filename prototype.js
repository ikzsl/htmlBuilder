/*
Нужно добавить функцинал логирования в функцию func класса Example
При этом она должна отрабатывать, как оригинальная функция без изменений 
(принимать и возвращать те же значения), но дополнительно выводить в консоль "call"
Менять изначальную функцию класс или созданный объект
Код можно писать только в обозначенной зоне
*/

class Example {
  constructor(num) {
    this.num = num;
  }

  func(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }

  f2(a, b) {
    return a + b;
  }
}

// Write you code here
// Example.prototype.func = function (...nums) {
//   const sum = (a, b) => a + b;
//   return `${this.num + nums.reduce(sum)} call`;
// };


const oldFunc = Example.prototype.func;
const newFunc = function (...nums) {
  console.log('call');
  return oldFunc.call(this, ...nums);
}

Example.prototype.func = newFunc;

// End of code

const a = new Example(5);
const res = a.func(5, 3, 5);
console.log('Result: ', res)
