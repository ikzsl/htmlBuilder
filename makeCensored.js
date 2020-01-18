const makeCensored = (text, stopWords) => {
  const textArr = text.split(' ');
  const result = [];
  for (const word of textArr) {

    if (stopWords.includes(word)) {
      result.push('$#%!');
    } else result.push(word);

  }
  console.log(result.join(' '))

};

const sentence = 'When you play the game of thrones, you win or you die';

makeCensored(sentence, ['die', 'play']);