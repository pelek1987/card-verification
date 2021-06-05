const getCardProvder = (cardNumber) => {

    if(isCardNumberValid(cardNumber)) {
        return getProvider(cardNumber);
    } else {
        return 'Incorrect card number';
    }

};

const isCardNumberValid = (cardNumber) => {
    return true;
};

const getProvider = (cardNumber) => {
    throw new Error('Cannot recognize card provider');
};

module.exports = getCardProvder