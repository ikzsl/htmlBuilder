const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];


// Каждый элемент массива содержит имя свойства
// и функцию-предикат для определения типа этого свойства.
const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
  },
];

// Получаем имя свойства по его типу.
const getPropertyName = (arg) => {
  const object = propertyActions.find(({ check }) => check(arg));
  return object.name;
};

// Формируем строковое представление аттрибутов тега.
const buildAttrString = (attrs) => (
  Object.keys(attrs).map((key) => ` ${key}="${attrs[key]}"`).join('')
);

// Функция принимает на вход тег.
const buildHtml = (data) => {
  // Получаем имя тега и свойства тега (атрибуты, тело, детей) в виде массива.
  const [first, ...rest] = data;

  // Формируем представление тега в виде объекта.
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };

  // Обходим свойства тега.
  const tag = rest
    .reduce((acc, arg) => {
      // Получаем имя свойства.
      const name = getPropertyName(arg);
      // Добавляем свойство в представление тега.
      return { ...acc, [name]: arg };
    }, root);

  // Из представления тега формируем строку,
  // вызывая рекурсивно функцию buildHtml для каждого ребёнка.
  return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
};

console.log(buildHtml(data));