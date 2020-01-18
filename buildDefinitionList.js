const buildDefinitionList = (coll) => {
  const result = [];
  if (coll.length === 0) {
    return '';
  }

  for (const item of coll) {
    result.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`)
  }

return `<dl>${result.join('')}</dl>`;
};

const definitions1 = [
    ['key', 'value'],
    ['key2', 'value2'],
  ];

  console.log(buildDefinitionList(definitions1)); 