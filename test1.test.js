const stringLength = require('./test1');

test('Exact string Count Returned', () => {
  expect(stringLength('Victor')).toBe(6);
});