function add(numbers) {
  if (!numbers) return 0;

  if (numbers.startsWith('//')) {
    customDelimiter = numbers.substring(2, 3);
    numbers = numbers.substring(4).replace(customDelimiter, ',');
  }

  return numbers
    .replace(/\n|\r\n/, ',')
    .split(',')
    .map(s => parseInt(s))
    .reduce((acc, n) => acc + n);
}

module.exports = {
  add: add
};