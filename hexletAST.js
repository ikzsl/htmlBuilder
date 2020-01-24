const singleTagsList = new Set(['hr', 'img', 'br']);

const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['br'],
    ]],
  ]],
]];

// BEGIN
const render = (data) => {
  const { name, attributes, body, children, } = data;
  const attrsLine = Object.keys(attributes)
    .map((key) => ` ${key}="${attributes[key]}"`).join('');
  const content = children.length > 0 ? children.map(render).join('') : body;

  if (singleTagsList.has(name)) {
    return `<${name}${attrsLine}>`;
  }

  return `<${name}${attrsLine}>${content}</${name}>`;
};

const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
    process: x => x,
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
    process: x => x,
  },
];

const getPropertyAction = (arg) => propertyActions.find(({ check }) => check(arg));

const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };

  return rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);
};
console.table(parse(data));
console.dir(parse(data));
// document.write(parse(data));
console.log(render(parse(data)));