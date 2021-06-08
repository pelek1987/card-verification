module.exports = cardNumberFeatures = {
    Mastercard: {
      cardNumberLengths: [16],
      cardNumberBeginings: ['51', '52', '53', '54', '55']
    },
    Visa: {
      cardNumberLengths: [13, 16],
      cardNumberBeginings: ['4']
    },
    "American Express": {
      cardNumberLengths: [15],
      cardNumberBeginings: ['34', '37']
    }
  };