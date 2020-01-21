// const data = ['html', [
//   ['head', [
//     ['title', 'hello, hexlet!'],
//   ]],
//   ['body', { class: 'container' }, [
//     ['h1', { class: 'header' }, 'html builder example'],
//     ['div', [
//       ['span', 'span text2'],
//       ['span', 'span text3'],
//     ]],
//   ]],
// ]];

const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span'],
      ['span', { class: 'text', id: 'uniq-key' }],
    ]],
  ]],
]];


const iterAst = (ast) => {
  switch (ast.type) {
    case 'tagsList':
      return `${ast.body.map(iterAst).join('')}`;
    case 'tag':
      const attrsLine = Object.keys(ast.options).reduce((acc, key) =>
        `${acc} ${key}="${ast.options[key]}"`, '');
      return `<${ast.name}${attrsLine}>${iterAst(ast.body)}</${ast.name}>`;
    default:
      return ast;
  }
};

const iter = (data) => {
  if (data[0] instanceof Array) {
    return { type: 'tagsList', body: data.map(iter) };
  }

  let body;
  let options;
  if (data.length === 3) {
    body = data[2];
    options = data[1];
  } else if (data.length === 2) {
    body = data[1];
    options = {};
  }

  const processedBody = body instanceof Array ? iter(body) : body;

  return { type: 'tag', name: data[0], body: processedBody, options };
};

const build = (data) => {
  const result = iter(data);
  return iterAst(result);
};

console.log(build(data))