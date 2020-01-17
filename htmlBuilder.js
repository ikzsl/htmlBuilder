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


const buildHtml = (data) => {
  let result = '';
  data.forEach((item, i) => {

    console.log('-------');
    if (item instanceof Array) {
      if (typeof item[0] === 'string') {
        result += `<${item[0]}>${result}</${item[0]}>`;
      }
      console.log(result);

      buildHtml(item);

    }





    // if (typeof item === 'string') {
    //   result += `<${item}>${buildHtml(item)}</${item}>`;
    //   console.log(item, result);
    // }
  });

  return result;
}


buildHtml(data);

// let q = data.shift();
// console.log("TCL: data", data);
// console.log("TCL: q", Array.from(q).shift())



// const buildHtml = (data) => {
//   let result = '';
//   let item = data.shift();
//   result += item;

//     if (typeof item === 'string') {
//       result += `<${item}>${buildHtml(Array.from(item).shift())}</${item}>`;
//       console.log(item, result);
//     }

//   return result;
// }
