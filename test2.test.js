const reversedString = require('./test2');

test('string not null or empty', () => {
  expect(reversedString).not.toBe(null) && expect(reversedString).not.toBe('')
})

test('Exact Reversed String Returned', () => {
  expect(reversedString('Victor')).toBe('rotciV');
})
