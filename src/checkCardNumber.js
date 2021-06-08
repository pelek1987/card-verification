const isCardNumberValid = require('./cardNumberValidator');
const getCardProvider = require('./getCardProvider');

const checkCardNumber = (cardNumber) => {
  if (isCardNumberValid(cardNumber)) {
    return getCardProvider(cardNumber);
  }
  return 'Incorrect card number';
};

module.exports = checkCardNumber;
