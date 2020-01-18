const capitalizeWords = (sentence) => {
  // определяем разделитель — пробел
  const separator = ' ';
  const words = sentence.split(separator);
  const capWords =[];
  console.log(words);
  for (const word of words) {
    capWords.push(`${word[0].toUpperCase()}`);
    // word.shift();
  }
  console.log(capWords);
};

const data = 'мама мыла раму';
capitalizeWords(data);

