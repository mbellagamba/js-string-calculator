function add(numbers) {
  if (!numbers) return 0;

  if (numbers.startsWith('//')) {
    customDelimiter = numbers.substring(2, 3);
    numbers = numbers.substring(4).split(customDelimiter).join(',');
  }

  return numbers
    .replace(/\n|\r\n/g, ',')
    .split(',')
    .map(s => parseInt(s))
    .reduce((acc, n) => acc + n);
}

module.exports = {
  add: add
};