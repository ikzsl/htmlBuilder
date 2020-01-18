const field = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

field[1][2] = null;
console.log(field);


const check = (field, symbol) => {
  for (const row of field) {
    if (row.includes(symbol)) {
      return true;
    }
  }
  return false;
};

