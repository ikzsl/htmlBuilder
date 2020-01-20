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
  let body = '';

  let [tagName, ...lastArgs] = data;
  console.log(" lastArgs", lastArgs)



  lastArgs.forEach((item, i) => {
    if (typeof item === 'string') {
      body = lastArgs;
    }

    if (item instanceof Array) {
     
      result += `<${tagName}>${body}${buildHtml(item)}</${tagName}>`;
      if (!item) {
        return;
      }
      if (item instanceof Object) {
        return;
      }
      // console.log(result);

      // buildHtml(item);

    }

    // if (typeof item === 'string') {
    //   result += `<${item}>${buildHtml(item)}</${item}>`;
    //   console.log(item, result);
    // }
  });

  return result;
}


// buildHtml(data);
console.log(buildHtml(data))

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
