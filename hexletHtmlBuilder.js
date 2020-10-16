const data = [
  'html',
  [
    ['head', [['title', 'hello, hexlet!']]],
    [
      'body',
      { class: 'container' },
      [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [['span'], ['span', { class: 'text', id: 'uniq-key' }]]],
      ],
    ],
  ],
];

const iterAst = (ast) => {
  switch (ast.type) {
    case 'tagsList':
      return `${ast.body.map(iterAst).join('')}`;
    case 'tag':
      const attrsLine = Object.keys(ast.options).reduce(
        (acc, key) => `${acc} ${key}="${ast.options[key]}"`,
        ''
      );
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
    [, options, body] = data;
  } else if (data.length === 2) {
    if (data[1] instanceof Array) {
      [, body, options = {}] = data;
    } else if (typeof data[1] === 'string') {
      [, body, options = {}] = data;
    } else {
      [, options, body = ''] = data;
    }
  } else if (data.length === 1) {
    body = '';
    options = {};
  }

  const processedBody = body instanceof Array ? iter(body) : body;

  return {
    type: 'tag',
    name: data[0],
    body: processedBody,
    options,
  };
};

const build = (data) => {
  return iterAst(iter(data));
};

console.log('TCL: build -> result', iter(data));
console.log(build(data));
