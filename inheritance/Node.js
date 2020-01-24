 class Node {
  constructor(name) {
    this.name = name + 3;
  }

  getName() {
    return this.name;
  }
}


class PairedTag extends Node {
  constructor(name, body = '') {
    super(name);
    this.body = body;
  }
  toString() {
    return `<${this.getName()}>${this.body}</${this.getName()}>`;
  }
}




const tag = new Node('div');
const spanTag = new PairedTag('name');


console.log("TCL: tag", tag);
console.log(tag.getName());
console.log( spanTag, spanTag.toString());