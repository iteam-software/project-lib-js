
import Lib from './Class';

test('it says hello to the world', () => {
  const lib = new Lib();
  expect(lib.hello()).toBe('World!');
});
