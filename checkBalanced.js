const checkIfBalanced = (expression) => {
  // Инициализируем стек
  const stack = [];
  // Инициализируем список открывающих элементов
  const startSymbols = ['{', '(', '<', '['];
  // Инициализируем список пар.
  const pairs = ['{}', '()', '<>', '[]'];

  // Проходимся по строке от первого до последнего символа
  for (const currentSymbol of expression) {
    // Если текущий символ находится в списке открывающих символов,
    // то заносим его в стек
    if (startSymbols.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      // Заходим в ветку else, если элемент не входит в список открывающих.
      // При этом считаем что текущий элемент — это закрывающий символ

      const previousSymbol = stack.pop();
      // Составляем из этих символов пару
      const pair = `${previousSymbol}${currentSymbol}`;
      // Проверяем, что она входит в список pairs.
      // Если входит, то все правильно, двигаемся дальше;
      // если нет, то это автоматически означает, что символы не сбалансированы
      if (!pairs.includes(pair)) {
        return false;
      }
    };
  }
  return stack.length === 0;
}
console.log(checkIfBalanced(['[', '[',']',']']))