/* eslint-disable i18next/no-literal-string */
import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass ');
  });

  test('with additional class', () => {
    const expected = 'someClass  class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass hovered'
    expect(classNames('someClass', { hovered: true, covered: false }, [])).toBe(expected);
  });

  test('with mods + undefined', () => {
    const expected = 'someClass hovered'
    expect(classNames('someClass', { hovered: true, covered: undefined }, [])).toBe(expected);
  });
})
