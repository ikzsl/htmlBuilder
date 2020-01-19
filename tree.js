// const tree = {
//   value: 5,
//   children: [
//     { value: 10 },
//     { value: 100 },
//     { value: 'nested', children: [/*-----*/] }

//   ]
// };

// --------------------------------

// const tree = ['A', [
//   ['B', [['E'], ['F']]],
//   ['C'],
//   ['D', [['G'], ['J']]],
// ]];

// const dfs = (tree) => {
//   const [name, children] = tree;
//   console.log(name);
//   if (!children) {
//     return;
//   }
//   return children.map(dfs);
// }

// dfs(tree);

// -------------------------------------

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

const dfs = (tree) => {
  const [name, children] = tree;
  console.log(name);
  if (!children) {
    return;
  }
  return children.map(dfs);
}

dfs(tree);