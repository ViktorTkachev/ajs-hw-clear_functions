import characterHealth from '../health-indication';

const charecters = [
  ['мечник', { name: 'мечник', health: 10 }, 'critical'],
  ['маг', { name: 'маг', health: 100 }, 'healthy'],
  ['лучник', { name: 'лучник', health: 40 }, 'wounded'],
];

test.each(charecters)('health indication test for %s character', (_, character, expected) => {
  const result = characterHealth(character);
  expect(result).toBe(expected);
});
