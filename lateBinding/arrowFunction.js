// Раннее связывание
const makeNode = (name) => {
  return {
    name,
    getName: () => {
      return this.name;
    },
  }
};

const node = makeNode('table');
console.log("TCL: node", node);
console.log("TCL: node.getName()", node.getName())
