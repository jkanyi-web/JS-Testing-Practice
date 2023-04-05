/** @format */

const capitalizeString = require('./test4');

test('Returns string with first character capitalized', () => {
  expect(capitalizeString('kanyi')).toBe('Kanyi');
});
