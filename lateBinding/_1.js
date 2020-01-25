const makeNode = name => {
  return {
    name,
    getName() {
      return this.name;
    },
  }
};

const obj = makeNode('table');
// obj.name;
// console.log(obj.name, obj.getName())

const func = obj.getName;
console.log(obj)
console.log(func());
