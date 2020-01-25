function f(name) {
  this.name = name;
}

const obj1 = {setName: f};
const obj2 = {setName: f};

console.log("TCL: obj1.setName === obj2.setName", obj1.setName === obj2.setName)

obj1.setName('Sam');
console.log("TCL: obj1", obj1);
obj2.setName('Tom');
console.log("TCL: obj2", obj2);

// позднее связывание - this определяется в момент вызова ф-ции

