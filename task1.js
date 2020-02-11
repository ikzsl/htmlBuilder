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
}

// Write you code here
class Logging{
    constructor (obj) {         
      this.obj = obj;
    }

    func(...nums) {
      return `${this.obj.func(...nums)} call`;
    }
}

const a1 = new Example(5);
const b = new Logging(a1);
const resLog = b.func(5, 3, 5);
console.log('Result: ', resLog)

// End of code

const a = new Example(5);
const res = a.func(5, 3, 5);
console.log('Result: ', res)
