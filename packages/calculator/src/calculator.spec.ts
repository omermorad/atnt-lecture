import { Calculator } from './calculator';

describe('Calculator Unit Spec', () => {
  test('adds two numbers', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });

  test('divides two numbers', () => {
    expect(Calculator.divide(6, 2)).toBe(3);
  });

  test('divides by zero', () => {
    expect(Calculator.divide(6, 0)).toBe(Infinity);
  });
});
