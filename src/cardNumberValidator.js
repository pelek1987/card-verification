const isCardNumberValid = (cardNumber) => {
  const normalizedCardNumber = normalize(cardNumber);
  const firstSet = normalizedCardNumber.filter((_, index) => index % 2 === 0);
  const secondSet = normalizedCardNumber.filter((_, index) => index % 2 === 1);
  const firstSum = firstSet
    .map((n) => (n * 2).toString())
    .reduce((curr, next) => {
      const firstDigit = next[0];
      const secondDigit = next[1];
      return curr + Number(firstDigit) + (secondDigit ? Number(secondDigit) : 0);
    }, 0);
  const secondSum = secondSet.reduce((curr, next) => curr + next, 0);
  return (firstSum + secondSum) % 10 === 0;
};

const normalize = (cardNumber) =>
  cardNumber.toString().length % 2 === 0 ? [...cardNumber.toString()].map((n) => Number(n)) : [0, ...cardNumber.toString()].map((n) => Number(n));

module.exports = isCardNumberValid;
