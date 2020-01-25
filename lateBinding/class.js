function Node(name) {
  this.name = name;
  this.getName = function getName() {
    return this.name;
  }
} 

const node = new Node('div');
node.getName()
console.log("TCL: node.getName()", node.getName())

