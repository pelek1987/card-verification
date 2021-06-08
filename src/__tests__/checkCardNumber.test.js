const checkCardNumber = require('../checkCardNumber');

test('should recognize MasterCard', () => {
  // given

  const cardNumber = 5105105105105100;

  // when

  const result = checkCardNumber(cardNumber);

  // then

  expect(result).toBe('Mastercard');
});

test('should recognize Visa', () => {
  const cardNumber = 4012888888881881;

  const result = checkCardNumber(cardNumber);

  expect(result).toBe('Visa');
});

test('should recognize American Express', () => {
  const cardNumber = 378282246310005;

  const result = checkCardNumber(cardNumber);

  expect(result).toBe('American Express');
});

test('should mark card number as incorrect', () => {
  const cardNumber = 123;

  const result = checkCardNumber(cardNumber);

  expect(result).toBe('Incorrect card number');
});

test('should throw when provider cannot be recognized', () => {
  const cardNumber = 6011000990139424;

  expect(() => {
    checkCardNumber(cardNumber);
  }).toThrow('Cannot recognize card provider');
});
