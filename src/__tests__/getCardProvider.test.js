const getCardProvder = require('../getCardProvider');

test('should recognize MasterCard', () => {
    // given

    const cardNumber = 2223016768739313;
    
    // when
    
    const result = getCardProvder(cardNumber);

    // then

    expect(result).toBe('MasterCard');
});

test('should recognize Visa', () => {

    const cardNumber = 4012888888881881;
    
    const result = getCardProvder(cardNumber);

    expect(result).toBe('Visa');
});

test('should recognize American Express', () => {

    const cardNumber = 378282246310005;
    
    const result = getCardProvder(cardNumber);

    expect(result).toBe('American Express');
});

test('should mark card number as incorrect', () => {

    const cardNumber = 123;
    
    const result = getCardProvder(cardNumber);

    expect(result).toBe('Incorrect card number');
});


test('should throw when provider cannot be recognized', () => {

    const cardNumber = 6011000990139424;

    expect(() => {
        getCardProvder(cardNumber)
    }).toThrow('Cannot recognize card provider');
});