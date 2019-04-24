function NegativeNumberException(values) {
    this.message = 'You cannot insert negative numbers';
    this.values = values;
}

NegativeNumberException.prototype = Object.create(Error.prototype);

function add(numbers) {
  if (!numbers) return 0;

  if (numbers.startsWith('//')) {
    customDelimiter = numbers[2];
    numbers = numbers.substring(4).split(customDelimiter).join(',');
  }

  const negativeNumbers = [];

  const sum = numbers
    .replace(/\n|\r\n/g, ',')
    .split(',')
    .map(s => {
      const number = parseInt(s);
      if (number < 0) negativeNumbers.push(number);
      return number;
    })
    .reduce((acc, n) => acc + n);

  if (negativeNumbers.length > 0) throw new NegativeNumberException(negativeNumbers);

  return sum;
}

module.exports = {
  add: add
};