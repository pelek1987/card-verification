const cardNumberFeatures = require('./cardNumbersFeatures');

const { Mastercard, Visa, AmericanExpress } = cardNumberFeatures;

const getCardProvider = (cardNumber) => {
  const cardNumberString = cardNumber.toString();

  if (isMastercard(cardNumberString)) {
    return 'Mastercard';
  } else if (isVisa(cardNumberString)) {
    return 'Visa';
  } else if (isAmEx(cardNumberString)) {
    return 'American Express';
  } else {
    throw new Error('Cannot recognize card provider');
  }
};

const isMastercard = (cardNumberString) => {
  const isLength = Mastercard.cardNumberLengths.includes(cardNumberString.length);
  const isPrefix = Mastercard.cardNumberBeginings.includes(cardNumberString.substring(0, 2));

  return isLength && isPrefix;
};
const isVisa = (cardNumberString) => {
  const isLength = Visa.cardNumberLengths.includes(cardNumberString.length);
  const isPrefix = Visa.cardNumberBeginings.includes(cardNumberString.substring(0, 1));

  return isLength && isPrefix;
};
const isAmEx = (cardNumberString) => {
  const isLength = AmericanExpress.cardNumberLengths.includes(cardNumberString.length);
  const isPrefix = AmericanExpress.cardNumberBeginings.includes(cardNumberString.substring(0, 2));

  return isLength && isPrefix;
};

module.exports = getCardProvider;
