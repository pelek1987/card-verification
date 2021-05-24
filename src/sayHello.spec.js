import sayHello from './sayHello';

test('returns "Hello, I\'m Paweł." when "Paweł" passed"', () => {
  expect(sayHello('Paweł')).toBe("Hello, I'm Paweł.");
});
