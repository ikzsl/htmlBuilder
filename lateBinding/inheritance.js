
function Node(name) {
  this.name = name;
  this.getName = function getName() {
    return this.name;
  }
}

function PairedNode(name, body) {
  Node.apply(this, [name]); //super
  this.body = body;
}

const node = new PairedNode('div', 'body');
console.log(node.getName(), node.body);

