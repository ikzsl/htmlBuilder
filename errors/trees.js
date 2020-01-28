class Tree {
  constructor(key, meta, parent) {
    this.parent;
    this.key;
    this.meta;
    this.children = new Map();
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);
    return child;
  }

  getChild(key) { return this.children.get(key); }

  getDeepChild(keys) {
    const [node, ...rest] = keys;
    if (rest.length === 1) {
      console.log(node, rest, this.getChild(node))
      return this.getChild(node);
    }
    // console.log(key, rest)
    node.getDeepChild(rest);
  }
}

const tree = new Tree('/');
tree.addChild('var')
  .addChild('lib')
  .addChild('run');
tree.addChild('etc');
tree.addChild('home');

const keys = ['var', 'lib'];

const deepChild = tree.getDeepChild(keys);
console.log(deepChild);

// const tree = new Tree('animals');
// tree.addChild('cats');
// const dogs = tree.getChild('dogs');
// console.log("TCL: dogs", dogs)


// const tree = new Tree('/');
// console.log(tree);

// tree.addChild('yt');
// console.log(tree);

// const child = tree.addChild('home').addChild('config', 'data');
// tree.addChild('etc');

// const node = tree.getChild('home').getChild('config');
