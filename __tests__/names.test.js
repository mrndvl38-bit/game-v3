const names = require('../names');

test('getRandomName returns name from specified species', () => {
  const name = names.getRandomName('human');
  expect(names.NAMES.human).toContain(name);
});

test('getRandomRole returns valid role', () => {
  const role = names.getRandomRole();
  expect(names.ROLES).toContain(role);
});

test('getRandomEvent returns object with text and effect', () => {
  const ev = names.getRandomEvent();
  expect(ev).toHaveProperty('text');
  expect(ev).toHaveProperty('effect');
  expect(typeof ev.text).toBe('string');
  expect(typeof ev.effect).toBe('object');
});

test('getRandomSkill returns number between 0 and 1', () => {
  const s = names.getRandomSkill();
  expect(typeof s).toBe('number');
  expect(s).toBeGreaterThanOrEqual(0);
  expect(s).toBeLessThanOrEqual(1);
});
